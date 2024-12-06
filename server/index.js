const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')

const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));


mongoose.connect('mongodb://127.0.0.1:27017/user')

app.post('/login', (req, res) => {
    console.log("Request received:", req.body);
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(500).json("Error finding user"));
});




app.post('/register', async (req, res) => {
    console.log('Request body:', req.body); // Log the incoming data
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newUser = new UserModel({ name, email, phone, password });
        console.log('Document to save:', newUser); // Log the document before saving
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: 'Failed to register user', error });
    }
});



app.listen(3001, () => {
    console.log("server is running")
})