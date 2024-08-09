function outer(number){
    let current='In outer';
    let another='ghjkl';
    console.log('outer- '+ number); 
  
    return function inner(number){
        console.log(current);
        console.log('inner- ' + number);
    }
}
const resultInner=outer(10);
resultInner(10);

///// Counter
function builCounter(initialValue=0){
    let currentCount=initialValue;
    return function(){
        console.log(currentCount++);
    }
}

 const counter=builCounter(0); 
 const seconCounter=builCounter(10);
 counter();
 seconCounter();
 counter();
 seconCounter();
 counter();
 seconCounter();
 counter();
