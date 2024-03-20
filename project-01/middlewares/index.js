const fs = require("fs");
function logReqRes(filename) {
  return (req, res, next) => {
    const log = `\n${Date()}: ${req.method} : ${req.url}`;
    fs.appendFile("filename", log, (err, data) => {
      next();
    });
  };
}

module.exports = { logReqRes };
