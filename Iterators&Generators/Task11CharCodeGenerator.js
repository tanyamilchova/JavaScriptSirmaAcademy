let str="ab";
function*generateCharCode(){
    for (let i=0;i<str.length;i++){
     let charCode=str.charCodeAt(i);
     yield charCode;
    }
    
}
let result=generateCharCode();
let nextLeter=result.next();
while(!nextLeter.done){
    console.log(nextLeter.value);
    nextLeter=result.next();
}