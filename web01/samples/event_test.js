

events = require("events");

// Create an emitter that can be used to fire events
emitter = new events.EventEmitter();

// Define a completed event handler
var completeHandler = function completed() {
    console.log("finished event is received");
}
// Register the complete event handler
emitter.on("complete", completeHandler);

// Define a connect event handler
var connectHandler = function complete() {
    console.log("connnected event received");
    // Emit a complete event
    emitter.emit('complete');
}
// Register the connect event handler
emitter.on("connect", connectHandler);

console.log("begining");
// Emit the connect event
emitter.emit("connect");
console.log("end of program");




