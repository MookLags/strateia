import mongoose from 'mongoose';
import Article from '../models/Article.js';

export const createArticle = async (req, res) => {
  const article = req.body;

  if (!article.title || !article.author || !article.description || !article.content) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }

  const newArticle = new Article(article);

  try {
    await newArticle.save();
    res.status(201).json({success: true, message: "Article successfully saved"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).json({success: true, data: articles});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getArticlesByUsername = async (req, res) => {
  try {
    const { articlename } = req.params;

    if (!articlename) return res.status(400).json({success: false, message: "Articlename required"});

    const article = await Article.findOne({ articlename: articlename });

    if (!article) return res.status(404).json({success: false, message: "Article not found"});

    const articles = await Article.find({author: article._id})
    if (!articles.length) return res.status(200).json({success: false, message: "Articles not found", data: []});

    res.status(200).json({success: true, data: articles});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const updateArticleById = async (req, res) => {
  try {
  const article = req.body;
  if (!article.title || !article.author || !article.description || !article.content) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }
  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    article,
    { new: true }
  )
  if (!updatedArticle) return res.status(404).json({success: false, message: "Article not found"});
  res.status(200).json({success: true, message: "Article successfully updated", data: updatedArticle});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const deleteArticleById = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).json({success: false, message: "Article not found"});
    res.status(200).json({success: true, message: "Article successfully deleted"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error."});
  }
}
