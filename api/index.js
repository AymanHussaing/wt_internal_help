// Code  for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');
// Machine Learning.
async function dbConnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/projectDB')
    } catch (err) {
        console.log("error while connecting to db")
    }
}
// Schema for users of app
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});
const User = mongoose.model('users', UserSchema);


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
    res.send("Hi there")


});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user with given email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        // If user doesn't exist, create a new user and save it
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).json({ message: "User saved successfully" });
    } catch (err) {
        console.error("User registration failed:", err.message);
        res.status(500).json({ message: "Database problem" });
    }
});



async function startServer() {
    await dbConnect()
    app.listen(3000);
    console.log('started the server')
}

startServer()
