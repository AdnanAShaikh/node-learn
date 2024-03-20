const fs = require("fs");
const os = require("os");

// fs.writeFileSync("./test.py", "print('Hello')");

// fs.writeFile("./test.txt", "helllo world async",(err,result) => {
//   console.log(result)
//});

const result = fs.readFileSync("./test1.txt", "utf-8");
// console.log(result);

fs.appendFileSync("./test1.txt", new Date().toLocaleString());
// fs.unlinkSync("name.txt") <- delete files
// fs.cpSync("from.txt","to.txt") <- copy file
console.log(os.cpus().length); //cores in your cpu
// fs.mkdir("tt1/a/f", { recursive: true }); create directory
