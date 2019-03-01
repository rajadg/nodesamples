
var assert = require('assert');
var points = require("../code/Point2D.js");

describe("1. test adjust", function(){
    it("1.1 check adjust X", function(){
        pt1 = new points.Point2D(1, 2);
        console.debug("\tpt1 initial value:" + pt1);
        pt1.adjustX(3);
        console.debug("\tpt1 after adjustX(3):" + pt1);
        assert(pt1.x == 4);
    });
    it("1.2 check adjust Y", function(){
        pt1 = new points.Point2D(1, 2);
        console.debug("\tpt1 initial value:" + pt1);
        pt1.adjustY(3);
        console.debug("\tpt1 after adjustY(3):" + pt1);
        assert(pt1.y == 5);
    });
});
describe("2. test distance methods", function(){
    it("2.1 check distance in positive points", function(){
        var p1 = new points.Point2D(3, 5);
        var p2 = new points.Point2D(7, 8);
        console.debug("\tintiial points are " + p1 + p2);
        var dt = p1.distance(p2);
        console.debug("\tdistance is " + dt);
        assert(dt == 5);
    });
    it("2.2 check distance in negative points", function(){
        var p1 = new points.Point2D(-11, -33);
        var p2 = new points.Point2D(-3, -27);
        console.debug("\tintiial points are " + p1 + p2);
        var dt = p1.distance(p2);
        console.debug("\tdistance is " + dt);
        assert(dt == 10);
    });
    it("2.3 check distance across axis", function(){
        var p1 = new points.Point2D(-1, -2);
        var p2 = new points.Point2D(2, 2);
        console.debug("\tintiial points are " + p1 + p2);
        var dt = p1.distance(p2);
        console.debug("\tdistance is " + dt);
        assert(dt == 5);
    });
});