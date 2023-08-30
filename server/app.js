const express = require("express");
const dotenv = require("dotenv");

const app = express();

//  dotenv configaration
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello word this is first response from get");
});

app.listen(PORT, console.log(`app listening on ${PORT} port number`));
