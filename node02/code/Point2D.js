//esversion: 6
var util = require("util");
function Point2D (x, y) {
    this.x = x;
    this.y = y;
    this.toString = function() {
        return util.format("(%d, %d)", this.x, this.y);
        //return "({0}, {1})".format(this.x, this.y);
    };
    this.distance = function (other) {
        return Math.sqrt((this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y));
    };
    this.adjustX = function (x) {
        this.x = this.x + x;
    };
    this.adjustY = function (y) {
        this.y = this.y + y;
    };
}

exports.Point2D = Point2D;
