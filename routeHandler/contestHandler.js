const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const contestSchema = require('../schemas/contestSchema');
const Contest = new mongoose.model('Contest', contestSchema);


router.post('/', async (req, res) => {
    console.log(req.body);
    const newContest = new Contest(req.body);
    await newContest.save()
        .then(() => {
            console.log("successfully saved");
            res.status(200).json({
                message: "contest successfully saved"
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: "Can not save"
            });
        })
});

router.get('/', async (req, res) => {
    Contest.find({}).then((data) => {
        res.status(200).json({
            message: "Contest successfully fetched",
            result: data
        });
    });
});

module.exports = router;