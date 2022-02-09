const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");
const app = express();

dotenv.config();

app.use(helmet());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images"))); //path to the folder where to stock files entering the application

app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/books", bookRoutes);

//connection to the Mongodb database
mongoose
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.sgu4m.mongodb.net:27017,cluster0-shard-00-01.sgu4m.mongodb.net:27017,cluster0-shard-00-02.sgu4m.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-47r3xz-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("successfuly connected to Mongodb"))
  .catch((err) => console.log(err));

module.exports = app;
