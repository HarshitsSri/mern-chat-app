import { User } from "../models/userModel.js";
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body
        if (!fullname || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password and confirm password do not match." })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ message: "Username is already present use another username" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        //profile photo girl - https://avatar.iran.liara.run/public/girl
        //boy - https://avatar.iran.liara.run/public/boy

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy/?username=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl/?username=${username}`

        await User.create({
            fullname,
            username,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message: "Successfully completed you registration",
            success: true
        })


    }
    catch (Error) {
        return res.status(501).json({
            message: Error,
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(401).json({
                message: "All fields are required",
                success: false
            })
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                message: "Username name does'nt exist",
                success: false
            })
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(401).json({
                message: "Password is incorrect!!",
                success: false
            })
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            _id: user._id,
            username: user.username,
            fullname: user.fullname,
            profilePhoto: user.profilePhoto
        });



    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try {
        
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout Successfully ",
            success: true
        });

    } catch (error) {
        console.log(error)
    }
}

export const getOtherUsers = async (req, res) => {
    try {
        const loggedInUser = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        return res.status(200).json(otherUsers);

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }

}