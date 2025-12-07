const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ debug: true });
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.get("/api/books", async (req, res) => {
  try {
    const query = req.query.q;
    console.log("query : ", query);

    if (!query) {
      return res.status(400).send("Missing query parameter");
    }

    const url = `https://openlibrary.org/search.json?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occured while fetching books");
  }
});

const start = async () => {
  try {
    app.listen(port, () => console.log(`App is running on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
