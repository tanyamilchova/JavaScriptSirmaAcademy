function*generatorArr(arr){
    for (let i=0;i<arr.length;i++){
     yield arr[i];
    }
}
let generatorObj=generatorArr([1,3,5]);
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());