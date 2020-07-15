// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

// Configuration
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/iobapp");

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Model
var TotalUnits = mongoose.model('Bolus Amount', {
    bg: Number,
    carbs: Number,
    hours: Number,
    ratio: Number,
    totalUnits: Number
});



app.get('/api/iobapp', function (req, res) {

    console.log("Listing bolus items...");

    TotalUnits.find(function (err, totalUnits) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(totalUnits); // return newly suggested bolus amount in JSON format
    });
});



// Start app and listen on port 8080  
app.listen(process.env.PORT || 8080);
console.log("IOB server listening on port  - ", (process.env.PORT || 8080));