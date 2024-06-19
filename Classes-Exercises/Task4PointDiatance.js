//Write a class that represents a Point. It has x and y coordinates as properties, that are
// set through the constructor, and a static method for finding the distance between two
// points, called distance().
// The distance() method should receive two Point objects as parameters.
// The distance() method should return a number, the distance between the two-point
// parameters.
// Sample Input Output
// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));
class Point{
    constructor(x,y){
    this.x=x;
    this.y=y;
 }
    static distance(p1,p2){
        let widthDif=Math.abs(p2.x-p1.x);
        let higthDif=Math.abs(p2.y-p1.y);
        let distanse=Math.sqrt(Math.pow(widthDif,2)+Math.pow(higthDif,2));
        return distanse;
        }
    }
let point1=new Point(5,5);
let point2=new Point(9,8);
console.log(Point.distance(point1,point2));
