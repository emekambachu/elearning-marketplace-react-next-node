import User from '../models/user';
import {
    hashPassword,
    comparePassword
} from "../service/auth_service";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        // console.log(req.body);
        // Deconstruct data from frontend
        const {name, email, password} = req.body;

        // Validate data
        if (!name) return res.status(400).send("Name is required");
        if (!email) return res.status(400).send("Email is required");
        if (!password || password.length < 6) {
            return res.status(400).send("Password is required and should be at least 6 characters");
        }
        let userExist = await User.findOne({email}).exec();
        if(userExist){
            return res.status(400).send("Email already exists");
        }

        // Hash Password
        const hashedPassword = await hashPassword(password);

        // register
        const user = await new User({
            name,
            email,
            password: hashedPassword,
        }).save();
        console.log("saved user", user);
        return res.json({
           success: true,
           user: user,
           message: "User saved successfully",
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send('Error. Try again')
    }
};

export const login = async (req, res) => {
    try {
        // console.log(req.body);
        // Deconstruct data from frontend
        const {email, password} = req.body;

        // Validate data
        if (!email) return res.status(400).send("Email is required");
        if (!password) return res.status(400).send("Password is required");

        // Check User
        let user = await User.findOne({email}).exec();
        if(!user){
            return res.status(400).send("Email does not exist");
        }

        // Check Password
        const checkPassword = await comparePassword(password, user.password);
        if(!checkPassword){
            return res.status(400).send("Incorrect Password");
        }

        // Create Signed JWT
        const token = jwt.sign(
            {_id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        // Send token in cookie
        res.cookie("token", token, {
           httpOnly: true,
           // secure: true,
        });

        console.log("Logged in");

        // Hide password from being shown in json response
        user.password = undefined;
        // Send user as json response
        return res.json({
            success: true,
            user: user,
            message: "Logged in",
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send('Error. Try again')
    }
};

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.json({
           success: true,
           message: "Sign-out Success"
        });
    }catch(err){
        console.log(err);
    }
};

export const currentUser = async (req, res) => {
    try {
        // find by id and select all except password
        const user = await User.findById(req.user._id)
            .select('-password')
            .exec();
        console.log('CURRENT_USER', user);
    }catch (err) {
        console.log(err);
    }
};