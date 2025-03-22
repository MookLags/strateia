import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({

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
  content: {
    type: String,
    required: true
  },
  isQuestion: {
    type: Boolean,
    defaut: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

const Article = mongoose.model("Article", articleSchema);

export default Article;
