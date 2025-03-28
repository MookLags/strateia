import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import userRoutes from './routes/User.js';
import articleRoutes from './routes/Article.js';
import videoRoutes from './routes/Video.js';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/video", videoRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
};

const PORT = process.env.PORT;
const CHANNEL_NAME = "c-7426576";
const RSS_FEED_URL = `http://rumble-rss.xyz/${CHANNEL_NAME}`;
const XML_FILE_PATH = path.join(__dirname, "rumble_feed.xml");

const downloadXML = async () => {
  try {
    const res = await fetch(RSS_FEED_URL);
    if (!res.ok) throw new Error("Failed to fetch RSS feed");
    const xmlData = await res.text();

    fs.writeFileSync(XML_FILE_PATH, xmlData);
    console.log("RSS feed successfully downloaded & cached");
  } catch (error) {
    console.error(`Error downloading RSS feed: ${error}`);
  }
}

const getParsedFeed = async () => {
  if (!fs.existsSync(XML_FILE_PATH)) {
    console.log("XML file not found, downloading...");
    await downloadXML();
  }

  const xmlData = fs.readFileSync(XML_FILE_PATH, "utf-8");
  const json = await parseStringPromise(xmlData, { explicitArray: false });

  return json.rss.channel.item.map(item => ({
    title: item.title,
    link: item.guid,
    thumbnail: item["media:thumbnail"].url,
    duration: item.description.match(/Duration: ([\d:]+)/)?.[1] || "Unknown",
    views: item.description.match(/Views: (\d+)/)?.[1] || "0",
    pubDate: item.pubDate
  }));
}

app.get("/api/rumble-feed", async (req, res) => {
  try {
    const videos = await getParsedFeed();
    res.json(videos);
  } catch (e) {
    console.error(`Error parsing RSS feed: ${e}`);
    res.status(500).json({success: false, error: "Failed to fetch feed" });
  }
});

setInterval(downloadXML, 15 * 50 * 1000);

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}.`);
  downloadXML();
})
