import mongoose from 'mongoose';
import Video from '../models/Video.js';
import User from '../models/User.js';

export const createVideo = async (req, res) => {
  const video = req.body;

  if (!video.title || !video.author || !video.description || !video.muxAssetId || !video.playbackId || !video.videoUrl) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }

  const newVideo = new Video(video);

  try {
    await newVideo.save();
    res.status(201).json({success: true, message: "Video successfully saved"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({success: true, data: videos});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getVideosByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) return res.status(400).json({success: false, message: "Username required"});

    const user = await User.findOne({ username: username });

    if (!user) return res.status(404).json({success: false, message: "User not found"});

    const videos = await Video.find({author: user._id})
    if (!videos.length) return res.status(200).json({success: false, message: "Videos not found", data: []});

    res.status(200).json({success: true, data: videos});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const updateVideoById = async (req, res) => {
  try {
  const video = req.body;
  if (!video.title || !video.author || !video.description || !video.muxAssetId || !video.playbackId || !video.videoUrl) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }
  const updatedVideo = await Video.findByIdAndUpdate(
    req.params.id,
    video,
    { new: true }
  )
  if (!updatedVideo) return res.status(404).json({success: false, message: "Video not found"});
  res.status(200).json({success: true, message: "Video successfully updated", data: updatedVideo});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const deleteVideoById = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({success: false, message: "Video not found"});
    res.status(200).json({success: true, message: "Video successfully deleted"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error."});
  }
}
