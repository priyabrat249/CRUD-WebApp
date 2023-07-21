import express from 'express';
import mongoose from 'mongoose';

import UserMessage from '../models/user.js';
import SignModel from '../models/signUpModel.js';
const router = express.Router();

export const addUser = async (req, res) => {
    console.log("hello",req.body);
    const user = req.body;

    const newUserMessage = new UserMessage(user);

    try {
        await newUserMessage.save();
        res.status(200).json(newUserMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const signUp = async (req, res) => {
    console.log(req.body);
    const user = req.body;

    const newUserMessage = new SignModel(user);

    try {
        await newUserMessage.save();
        res.status(200).json(newUserMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    
    const user = await SignModel.findOne({ email: email });
    if (user) {
        if (user.password === password) { 
            res.json("Succesful")
        }
        else {
            res.json("Incorrect password")
        }
    }
    else {
        res.json("Not Found")
    }
        
    
    
}

export const getUsers = async (req, res) => {


    try {
        const userDetails = await UserMessage.find({});
        console.log(userDetails);
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    console.log(req.params);
    
    try {
        
        const user = await UserMessage.find({ userId:req.params.userId } );
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        
        res.status(404).json({ message: error.message });
    }
}

export const editUser = async (req, res) => {
    
    const user = req.body;
    
    const newedited= new UserMessage(user);
    console.log(newedited);
    
    try {
        await UserMessage.updateOne({userId:req.params.userId},newedited);
        res.status(201).json(newedited);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    // console.log(req.params);
    
    try {
        
        await UserMessage.deleteOne({ userId:req.params.userId });
        console.log(user);
        res.status(200).json({ message: "User deleted Successfully" });
    } catch (error) {
        
        res.status(409).json({ message: error.message });
    }
}
  export default router;
