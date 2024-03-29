const express = require("express");
const urlRoute = require("./routes/url");
const URL = require("./model/url");
const { connectToMongoDB } = require("./connection");
const app = express();
const path = require("path");
const ejs = require("ejs");
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongo connected ! ! !")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/user", userRoute);

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });

app.get("/", staticRouter);

app.get("/url/:shortId", async (req, res) => {
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

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

const PORT = 8001;

app.listen(PORT, () => console.log("Server started at 8001"));
