import { User } from "../models/userModel.js";
import express from 'express'
import bcrypt from 'bcr'

export const register = async (req , res) => {
    try{
        const {fullname, username, password, confirmPassword , gender} =req.body
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:"Password and confirm password do not match."})
        }

        const user = await User.findOne({ username})

        if(user){
            return res.status(400).json({message:"Username is already present use another username"})
        }
        

    }
    catch(Error){

    }
}