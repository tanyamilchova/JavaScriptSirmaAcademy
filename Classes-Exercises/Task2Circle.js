class Circle{
    constructor(radius){
    this.radius=radius;
    }
    setRadius(diameter){
        this.radius=diameter/2;
    }
       setRadius(diameter){
        this.radius=diameter/2;
    }
    getRadius(){
        return this.radius;
    }
    getDiameter(){
        return this.radius*2;
    }
    getRadius(){
        console.log(this.radius);
        return this.radius;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI;
    }

}
let circle=new Circle(2);
// let diam=circle.getRadius();
console.log(`Radius:${circle.radius}`);
console.log(`Diameter:${circle.getDiameter()}`);
console.log(`Area:${circle.getArea()}`);

let newRadius=circle.setRadius(200);
console.log(circle.radius);

