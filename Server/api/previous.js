/* this was not working */

const express = require("express");
const app = express();
const cors = require("cors");
const https = require("https");
 
console.log("start after all const");
 
 
 
 
// enabling all cors requests
app.use(cors());
 
const object = https.get("https://fantasy.premierleague.com/api/leagues-classic/76993/standings/",
  (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
 
 
console.log("after object")
 
 
app.get("*", (req, res) => {
  res.json(object);
});
 
console.log("app.get");
app.listen();
 
console.log("listening")
 
console.log(object);