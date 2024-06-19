

function* generateFibo(){
let first=1;
let second=1;
yield
first;
yield second;
    while(true){
        let current=first+second;
        first=second;
        second=current;
        yield current;
    }
}
const iterator=generateFibo();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);