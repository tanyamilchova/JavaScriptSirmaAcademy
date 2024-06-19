let arr=['a','b','c'];
arr[Symbol.iterator]=function*(){
    for (let i=this.length-1;i>=0;i--){
     yield this[i];
    }
}
for (let number of arr) {
    console.log(number);
}
// Достъп до главния итератор през Array.prototype
// ще презапише всички итератори да въртят на обратно
Array.prototype[Symbol.iterator]=function*(){
    for (const i=arr.length-1;i>=0;i--){
     yield this[i];
    }
}