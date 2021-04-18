const express = require("express");
const path = require("path");
const app = express();
      port = 3080;

// place holder for the data
const brands = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));

app.get("/api/brands", (_req, res) => {
  console.log("api/brands called!")
  res.json(brands);
});

app.post("/api/brand", (req, res) => {
  const brand = req.body.brand;
  brand.id = Math.round(Math.random()*100);
  console.log("Adding brand:::::", brand);
  brands.push(brand);
  res.json("brand added");
});

app.get("/", (_req,res) => {
  res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});