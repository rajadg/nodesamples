

events = require("events");

emitter = new events.EventEmitter();

var adder = function add(actions) {
    item = actions.slice(-1)[0];
    actions.push("+10");
    actions.push(item + 10);
}

var subtracter = function staple(actions) {
    item = actions.slice(-1)[0];
    actions.push("-3");
    actions.push(item - 3);
}

emitter.addListener("sequence", adder);
emitter.addListener("sequence", subtracter);
emitter.addListener("sequence", adder);
emitter.addListener("sequence", subtracter);
emitter.addListener("sequence", subtracter);
emitter.addListener("sequence", adder);

actions = [100];
emitter.emit("sequence", actions);

console.log ("final action sequence: ");
console.log(JSON.stringify(actions));