//Write a class Rectangle for a rectangle object. It needs to have a width (Number), height
// (Number), and color (String) properties, which are set from the constructor, and a
// calcArea() method, that calculates and returns the rectangle’s area.
// The calcArea() method should return a number.
// Sample Input Output
// let rect = new Rectangle(4, 5, &#39;Red&#39;);
// console.log(rect.width);
// console.log(rect.height);

// 4
// 5
// Red
class Rectangle{
    constructor(width,hight,color){
        this.width=width;
        this.hight=hight;
        this.color=color;
    }
    calkArea(){
        return parseFloat(this.width*this.hight);
    }
}
let rect=new Rectangle(4,5,"Red");
console.log(rect.width);
console.log(rect.hight);
console.log(rect.color);
console.log(rect.calkArea());

