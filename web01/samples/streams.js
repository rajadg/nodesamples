

fs = require('fs');
zlib = require('zlib');

var input_file = "package.json";
var output_file = "test_package_json.log";
var zip_file = "logs.gz";

var data = "";
readStream = fs.createReadStream(input_file);
readStream.on("data", function(chunk) {
    data += chunk;
});
readStream.on("end", function(){
    console.log("reading file {%s} complete", input_file);
    console.log("contents:");
    console.log(data);
    console.log("EOL");
})

console.log("End of program");

writeStream = fs.createWriteStream(output_file);
readStream.pipe(writeStream);
console.log("output file {%s} created after piping", output_file);

fs.createReadStream(input_file).pipe(zlib.createGzip()).pipe(fs.createWriteStream(zip_file));
console.log("file {%s} is zipped and saved as {%s}", input_file, zip_file);

