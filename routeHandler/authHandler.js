const express = require('express');
const bycript = require('bycript');
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../schemas/authSchemas/userSchema');
const User = new mongoose.model('User', userSchema);


router.post('/register', async (req, res) => {
    const { userName, password } = req.body;
    const hashedPassword = await bycript.hash(password, 10);
    const user = new User({userName, password: hashedPassword});
    await user.save();
    res.json({message: 'User registered successfully'});
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });

    if(!user) {
        return res.status(401).json({message: 'Authentication failed. Incorrect username or password.'});
    }

    const passwordMatch = await bycript.compare(password, user.password);

    if(!passwordMatch) {
        return res.status(401).json({message: 'Authentication failed. Incorrect username or password.'});
    }

    const token = jwt.sign({ username: user.username }, 'confusedLeet');
    return res.json({token})
});