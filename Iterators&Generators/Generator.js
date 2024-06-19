function*numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let numIterator=numberGenerator();
console.log( numIterator.next());
console.log( numIterator.next());

function*nameGenerator(){
    yield 'Pesho';
    yield 'Maria';
    yield 'Rosa';
}
let nameIterator=nameGenerator();
console.log( nameIterator.next());
console.log( nameIterator.next());
console.log( nameIterator.next());
console.log( nameIterator.next());


    let names={
        [Symbol.iterator](){
            let names=['Pesho','Gosho','Mariika'];
            let currIdx=0;
            return{
                next(){
                    return{
                        value:names[currIdx++],
                        done:names.length<currIdx
                    }
                }
            }
        }
    }

for (const name of nameGenerator()) {
    console.log(name);
}
for (const name of names) {

    console.log(name);
}