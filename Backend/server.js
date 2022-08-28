require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');



const app = express();
app.use(express.json());

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use("/api", require("./routes/categoryRouter"));
app.use("/api", require("./routes/productRouter"));

const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("serverimiz isliyir...");
  })
  .catch(() => {
    console.log("false");
  });

app.get("/", (req, res) => {
  res.json({ msg: "Welcome my site" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
