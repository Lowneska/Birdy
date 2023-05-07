import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { signInErrors } from '../utils/errors.js';
const maxAge = 3 * 24 * 60 * 60 * 1000;


export const register = async (req, res) => {
    try {
        const {
            email,
            login,
            password,
            picturePath,
            friends,
            bio,
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            login,
            password: passwordHash,
            picturePath,
            friends,
            bio,
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const login = async (req, res) => {
    try{
        const {login, password} = req.body;
        const user = await User.findOne({login : login});
        if (!user) 
            return res.status(404).json({msg : "Email not found"});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(404).json({msg: "The password you entered does not match with the email."});
        const token = jwt.sign({id : user._id}, process.env.TOKEN_SECRET, {expiresIn: maxAge});
        res.cookie('jwt', token, {httpOnly : true, maxAge});
        delete user.password;
        res.status(200).json({token, user: user._id});
    }catch (err) {
        res.status(500).json({ errors });
    }
}

export const logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
}

