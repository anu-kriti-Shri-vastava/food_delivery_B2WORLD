const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDb } = require("./connection");
const routes = require("./routes");

connectDb();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://food-delivery-b2-world-se9g.vercel.app"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
