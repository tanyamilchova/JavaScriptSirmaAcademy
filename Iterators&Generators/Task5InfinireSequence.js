//Develop a generator that keeps yielding an increasing number on each call, starting from
// 1.

    function*nextIter(){
        let start=1;
        while(true){
            yield start++;
        }
    }
    let result=nextIter();
console.log(result.next());
console.log(result.next());
console.log(result.next());
// console.log(nextIter().next());
// console.log(nextIter().next());
// console.log(nextIter().next());
