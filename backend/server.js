import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRoutes from './routes/User.js';
import articleRoutes from './routes/Article.js';
import videoRoutes from './routes/Video.js';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());

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

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}.`);
})

console.log(`User routes loaded: ${userRoutes}`);
