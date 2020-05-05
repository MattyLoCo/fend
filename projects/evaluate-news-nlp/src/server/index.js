const dotenv = require('dotenv');
dotenv.config();

var aylien = require('aylien_textapi'); 
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

/* Initialize server */
app.listen(3000, function () {
    console.log('NLP app listening on port 3000!')
});

/* Set routes */
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('evaluate-news-nlp/dist/index.html'))
});

app.post('/api', async (req, res) => {
    let formText = req.body;
    
    try {
        console.log(`Sending request to Aylien for ${formText}...`);
        textapi.sentiment({
            text: formText,
            mode: 'document'
        }), function (error, response) {
            if (error === null) {
                console.log(typeof response + response);
                response.send(response.body);            
            }
        } 
    } catch(error) {
        console.log(error);
    }
})
