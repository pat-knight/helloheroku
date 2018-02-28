const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/cars", (req, res) => {
  var cars =[
    {
      make: "tesla",
      model: "t"
    },
    {
      make: "jeep",
      model: "wrangler"
    },
    {
      make: "audi",
      model: "tt"
    },
    {
      make: "pontiac",
      model: "grand am"
    }
  ];
  res.send(cars);
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
