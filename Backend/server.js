require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");


const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("serverimiz isliyir...");
  })
  .catch(() => {
    console.log("false");
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api", require("./routes/categoryRouter"));
app.use("/api", require("./routes/productRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/upload"));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome my site" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
