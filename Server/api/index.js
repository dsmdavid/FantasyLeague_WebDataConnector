const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");



// middleware to allow CORS requests from anywhere
app.use(cors());
// middleware for rendering JSON data
app.use(express.json());

// function that accepts a url param, resolves a promise to display json data
const getData = async url => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {
    return { response: `Yep, We got an error ${error}` };
  }
};

app.get("*", async (req, res) => {
  const url = `https://fantasy.premierleague.com/api/leagues-classic/76993/standings/`;

  const apiData = await getData(url);
  res.json(apiData);
});

//app.listen("1234", () => console.log("Wohoo, We got a server running on Localhost PORT 1234"));


app.listen();

