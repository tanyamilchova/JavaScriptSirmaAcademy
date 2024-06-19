class Info{
    constructor(produser,age,brand){
        this.produser=produser;
        this.age=age;
        this.brand=brand;
    }
}
class Laptop{
constructor(info,quality){
this.info=info;
this.isOn=false;
this.quality=quality;
console.log(info);

}
turnOn(){
    this.isOn=true;
    this.quality--;
}
turnOff(){
    this.isOn=false;
    this.quality--;
}
getPrice() {
    let price = 800 - (this.info.age * 2) + (this.quality * 0.5);
    return price;
}

}

let info=new Info("Assus",2,"Zenbook");
// let info={produser:"Assus",age:2,brand:"Zenbook"};
let laptop=new Laptop(info,10);
laptop.turnOn();
laptop.turnOn();
laptop.turnOn();
laptop.turnOn();

console.log(laptop.getPrice());