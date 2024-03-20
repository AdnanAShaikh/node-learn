const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");

const userRouter = require("./routes/user");

const app = express();

const PORT = 8000;

//Schema

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() =>
  console.log("Mongo Connected")
);

//Routes

app.use(express.urlencoded({ extended: false })); //3rd party middleware used to convert the incoming post req into objects.

//app.use to create a middleware.

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Server started at PORT: 8000"));
