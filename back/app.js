const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ debug: true });
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello ");
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
