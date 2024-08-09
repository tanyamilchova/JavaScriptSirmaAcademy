// 9. Fibonacci
// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1.
// Use a closure to keep the current number.
 function fiboCounter(initialValue=0,next=1){
    let prev=initialValue;
    let curent= next;
    return function fibo() {
        let value=prev+curent;
        console.log('Value is:'+value);
        prev=curent;
        curent=value;

    }
 }

 let fibResult=fiboCounter();
 fibResult();
 fibResult();
 fibResult();
 fibResult();
 fibResult();
 fibResult();
 fibResult();
 fibResult();