// assigned to a variable
const sing=function(){
    console.log('Lalsla');
}
const arrFunct=()=>console.log('arrow');

function some(){

}
const another=some();
 // can be passed as an argument
 function sum(a,b){
console.log(a+b);
 }
 function execute(operation, first,second){
   return operation(first, second);
 }
 execute(sum,4,8);
 execute((a,b)=>console.log(a-b), 10, 5);
 execute(function(a,b){ // inline function expresion
    console.log(a*b);
 }, 10,5);

 // 3. function can  be returned as a result of another function

 function operationGuilder(operationName){
    switch (operationName){
        case 'divide':
            return(a, b)=>a/b;
            case 'multiplay':
                return (a, b)=> a*b;
                case 'sqrt':
                    return (a)=>Math.sqrt(a);
    }
 }

 const sqrt=operationGuilder('sqrt');
 console.log(sqrt(4));

 // Crasy example
 console.log(execute (operationGuilder('divide'),10,2));