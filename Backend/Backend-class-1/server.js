const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Port = 3000;
app.use(bodyParser.json());
app.listen(Port, () => {
  console.log(`server running at http://localhost:${Port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Jeee ki haal haiii??");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully.");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected.");
  })
  .catch((error) => {
    console.log("Error aagya.");
  });
