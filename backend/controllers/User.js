import mongoose from 'mongoose';
import User from '../models/User.js';

export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.firstName || !user.lastName || !user.username || !user.email || user.isAdmin === undefined) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({success: true, message: "User successfully created"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({success: true, data: users});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({success: false, message: "User not found"});
    res.status(200).json({success: true, data: user });
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({success: false, message: "User not found"});
    res.status(200).json({success: true, message: "User successfully deleted"});
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: "Internal server error."});
  }
}
