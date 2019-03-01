
exports.sum = function(a, b) {
    return a + b;
};

exports.diff = function(a, b) {
    return a - b;
};

exports.mult = function(a, b) {
    return a * b;
};

exports.div = function(a, b) {
    return a / b;
};

var currentPath = process.cwd();
console.log(currentPath);
var points = require("./code/Point2D.js");
var p1 = new points.Point2D(3, 5);
var p2 = new points.Point2D(6, 9);
console.log("p1:" + p1);
console.log("p2:" + p2);
var d = p1.distance(p2);
console.log("Distance is:" + p1.distance(p2));