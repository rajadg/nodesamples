

events = require("events");

emitter = new events.EventEmitter();

var index = 1;

var punching = function punch(actions) {
    actions.push("punch item-" + index.toString());
    index = index + 1;
}

var stapling = function staple(actions) {
    actions.push("staple item-" + index.toString());
    index = index + 1;
}

emitter.addListener("pipeline", stapling);
emitter.addListener("pipeline", punching);
emitter.addListener("pipeline", punching);
emitter.addListener("pipeline", stapling);

actions = [];
emitter.emit("pipeline", actions);

console.log ("final action pipleline: ");
console.log(JSON.stringify(actions));