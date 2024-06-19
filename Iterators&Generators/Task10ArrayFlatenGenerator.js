// Write a generator that takes a nested array and flattens it.
let str=['a',['b','c'],['d','e']];
function*flatten() {
    for (let i=0;i<str.length;i++){
      if(Array.isArray(str[i])){
          for (let j=0;j<str[j].length;j++){
             yield str[i][j];
          }
      }else{
        yield str[i];
      }
    }
}
let res=flatten();
let nextRes=res.next();
while(!nextRes.done){
  console.log(nextRes.value);
  nextRes=res.next();
}
console.log(res.next());

