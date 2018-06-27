
fs = require("fs");


console.log("beggining program");
fs.readFile("./samples/file_read.js", function (err, data) {
    if (err) {
        console.error("error occurred while reading file");
    } else {
        console.log("contents of file:");
        console.warn(data.toString());
        console.log("EOL");
    }
});

console.log("last line of program");