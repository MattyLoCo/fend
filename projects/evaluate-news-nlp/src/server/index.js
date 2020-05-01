const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')
var aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the NLP app will listen to for incoming requests
app.listen(8081, function () {
    console.log('NLP app listening on port 8080!')
})

//  This is a separate page that cannot use the webpack server 8080
//  because webpack dev server only accommodates ones page
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
