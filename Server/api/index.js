const express = require("express");
const app = express();
const cors = require("cors");
const https = require("https");

const http = require("http");

console.log("start after all const");




// enabling all cors requests
app.use(cors());

/* New test */

console.log("after object")

const object = http.get("http://nodejs.org/dist/index.json", (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});



app.get("*", (req, res) => {
  

  res.json(object);
});

console.log("app.get");
app.listen();

console.log("listening")

