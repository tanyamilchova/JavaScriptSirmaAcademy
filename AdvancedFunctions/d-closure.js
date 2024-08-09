function outer(number) {
    let current = 'outer';
    let another = 'alsdjkfasd';
    console.log('outer - ' + number);

    return function inner(number) {
        console.log(current);
        console.log(another +": from the outeh function");
        console.log('Inner - ' + number);
    }
}

const inner = outer(10);
inner(5);

// inner(20);

// // Counter
function buildCounter(initialValue = 0) {
    let currentCount = initialValue;

    return function() {
        console.log(++currentCount);
    }
}

// const firstCounter = buildCounter();
const secondCounter = buildCounter(1);
// firstCounter();
secondCounter();
secondCounter();
// firstCounter();
// firstCounter();
// firstCounter();


