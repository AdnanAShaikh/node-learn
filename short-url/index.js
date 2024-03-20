const express = require("express");
const urlRoute = require("./routes/url");
const URL = require("./model/url");
const { connectToMongoDB } = require("./connection");
const app = express();

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongo connected ! ! !")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

const PORT = 8001;

app.listen(PORT, () => console.log("Server started at 8001"));
