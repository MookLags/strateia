import mongoose from 'mongoose';
import User from './User.js';

const videoSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    maxLength: 25
  },
  description: {
    type: String,
    required: true
  },
  muxAssetId: {
    type: String,
    required: true,
    unique: true
  },
  playbackId: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, { timestamps: true });

const Video = mongoose.model("Video", videoSchema);

export default Video;
