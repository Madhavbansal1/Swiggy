import userModel from "../models/User.model.js";
import json from "jsonwebtoken";

export const signup = async (req,res) =>{
    try {
       const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).send("All fields are required");
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).send("Email already exists");
        }
       
         
        const newUser = await userModel.create({ fullName, email, password });
        return res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).send("Internal Server Error");
        
    }
}


export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid password");
        }
         const token = json.sign({email}, "00000" , {expiresIn: "1h"});
        return res.status(200).json({ message: "Login successful", user , token });
        
        
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send("Internal Server Error");
        
    }
}