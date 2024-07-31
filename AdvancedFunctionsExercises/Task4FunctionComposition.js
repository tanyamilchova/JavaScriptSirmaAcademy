// 4. Function Composition.
// Create two functions, one that doubles a number and one that squares a number. Create
// a third function that composes these two functions to first double and then square a
// number.


const double=function(a){
    return a*2;
}
const square = function(b){
    return Math.pow(b, 2);
}
const compose = function(doubleOp, squareOp){
return function(value){
    const doubleRes=doubleOp(value);
    const squareRes=squareOp(doubleRes);
    return squareRes;
}
}


const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));