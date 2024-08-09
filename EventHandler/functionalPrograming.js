const sum=function(a,b){
    console.log(a+b);
}

//* Passed as an argument
function execute(operation,first,second){
    operation(first,second);
}
execute(sum,4,8){

}
function operationBuilder(operationName){
    switch(operationName){
        case"divide":return(a,b)=>a/b;
        case"multiply":return a*b;
        case sqrt:return (a)=>{
            Math.sqrt(a)
        };
    }
}
const sqrtOperaton=operationBuilder("sqrt");
console.log(sqrtOperaton);