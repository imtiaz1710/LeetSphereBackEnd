const express = require('express');
const mongoose = require('mongoose');
const contestHandler = require('./routeHandler/contestHandler');

const app = express();
app.use(express.json());
const port = 3000;

//database connection with mongoose
mongoose.connect('mongodb://localhost/leetSphere')
    .then(() => console.log('successfully connected'))
    .error((err) => console.error(err));

function errorHandler(err, req, res, next) {

}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.use('/contest', contestHandler);