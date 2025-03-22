import pkg from 'validator';
import mongoose from 'mongoose';

const { isEmail } = pkg;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: [ isEmail, "Invalid Email"]
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  }],
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }]
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

export default User;
