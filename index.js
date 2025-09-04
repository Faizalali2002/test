const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Landing Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Page");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
