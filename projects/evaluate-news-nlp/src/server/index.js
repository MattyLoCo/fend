/* Javascript object endpoint for routes */
projectData = {
  text: "",
};

/* Creates private folder for Aylien SDK credentials */
const dotenv = require("dotenv");
dotenv.config();

/* Aylien SDK instantiation */
var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

/* Declare middleware */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

/* Make app use middleware */
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));
console.log(__dirname);

/* Listen for app server */
app.listen(3000, function () {
  console.log("NLP app listening on port 3000!");
});

/* Set routes */

// GET
app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("evaluate-news-nlp/dist/index.html"));
});

// POST
app.post("/sentiment", function (req, res) {
  projectData = {
    text: req.body,
  };

  textapi.sentiment(
    {
      text: req.body,
      mode: "tweet",
    },
    function (error, response) {
      if (error === null) {
        console.log(
          `${typeof response} is being sent back to index.js for uiUpdate function...`
        );
        res.send(response);
      } else
        (error) => {
          console.log(error);
        };
    }
  );
});
