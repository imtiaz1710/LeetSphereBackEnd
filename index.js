const express = require('express');
const mongoose = require('mongoose');
const contestHandler = require('./routeHandler/contestHandler');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = 3000;

//database connection with mongoose
mongoose.connect('mongodb://localhost/leetSphere', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('successfully connected'))
    .catch((err) => console.error(err));

function errorHandler(err, req, res, next) {

}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors());
app.use("/contest", contestHandler);
app.use("/auth", appAuthHandler);