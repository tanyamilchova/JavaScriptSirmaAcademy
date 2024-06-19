function*generateId(){
    let id=1;
    while(true){
        const increment =yield id;
        if(increment!=null){
            id+=increment;
        }else{
            id++;
        }
    }
}
let generratorObj=generateId();
console.log(generratorObj.next());
console.log(generratorObj.next());

console.log(generratorObj.return(10));
console.log(generratorObj.return());
