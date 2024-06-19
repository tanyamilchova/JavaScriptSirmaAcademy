class Cat{
    constructor(name,age,fillData){
        this.name=name;
        this.age=age;
    }
makeSoound(){
    console.log(`${this.name}:Meou,meou!`);
}
}
let arr=["Mellon,2","Tom,3"];
    function fillData(arr){
   
    arr.forEach(element => {
    let [name,age]=element.split(",");
    let elementCat=new Cat(name,age);
    elementCat.makeSoound();

    });
}
fillData(arr);


  
