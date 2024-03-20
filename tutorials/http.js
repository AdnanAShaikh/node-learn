const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${new Date().getTime()}: New Request Received on ${
    req.url
  } method: ${req.method} \n`;
  const myUrl = url.parse(req.url, true);
  //   console.log(myUrl);
  fs.appendFile("log.txt", log, (err, result) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Homepage");
        break;

      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;

      default:
        res.end("404 not Found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server started!! ");
});
