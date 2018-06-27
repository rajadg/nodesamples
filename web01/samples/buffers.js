

var buffer = new Buffer(10);

var full_sentence = "This is a sample sentence";

console.log("example 1:");
console.log("original full_sentence:\n{" + full_sentence + "}\n");
console.log("Writing full_sentence into a buffer of 10 bytes");
len = buffer.write(full_sentence, "utf-8");

console.log("total bytes written to buffer is : ", len);

console.log("content inside buffer is : ", buffer.toString());

buffer= new Buffer(full_sentence, "ascii");

console.log("buffer created with full sentence. contents: ", buffer.toString());
console.log("\n\n");

var uni_text = "நோட் ஜே.எஸ்";
console.log("example 2:")
console.log("original unicode text:\n{" + uni_text + "}\n");

buffer = new Buffer(uni_text, "utf8");
console.log("buffer contents: " + JSON.stringify(buffer.toJSON(buffer)));

var ascii_text = buffer.toString("ascii");
console.log("reading from buffer as ascii_text: ", ascii_text);

var utf8_text = buffer.toString("utf8");
console.log("reading from buffer as utf8_text: ", utf8_text);

var utf16le_text = buffer.toString("utf16le");
console.log("reading from buffer as utf16le_text: ", utf16le_text);