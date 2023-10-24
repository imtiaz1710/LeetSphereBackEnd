const express = require('express');
const router = express.Router();
const contestSchema = require('../schemas/contestSchema');
const Contest = new mongoose.model('Contest', contestSchema);


router.post('/', async (req, res) => {
    const newContest = new Contest(req.body);
    await newContest.save((err) => {
        if(err){
            console.log(err);
            req.status(500).json({
                error: "Error saving contest"
            })
        }
        else {
            console.log("successfully saved");
            req.status(200).json({
                message: "contest successfully saved"
            })
        }
    })
});

