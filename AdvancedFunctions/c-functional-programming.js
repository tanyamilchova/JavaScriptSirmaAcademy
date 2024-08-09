// First Class Function

// * 1. Function can be assigned to a variable
const sum = function (a, b) {
    console.log(a + b);
};

// * 2. Function cam be passed as an argument
function execute(operation, first, second) {
    return operation(first, second);
}

execute(sum, 4, 8);
execute((a, b) => console.log(a - b), 10, 5);
execute(function (a, b) {
    console.log(a * b);
}, 10, 5);

// * 3. Function can be returned as result from another function
function operationBuilder(operationName) {
    switch (operationName) {
        case 'divide':
            return (a, b) => a / b;
        case 'multiply':
            return (a, b) => a * b;
        case 'sqrt': {
            return (a) => Math.sqrt(a);
        }
    }
}

const sqrtOperation = operationBuilder('sqrt');
console.log(sqrtOperation(4));

// Crazy example
console.log(execute(operationBuilder('divide'), 10, 2));

// * Predicate function - accepts an argument and returns boolean
function isPassed(grade) {
    return grade >= 3;
}

function isValid(password) {
    let isValid = true;

    if (password.length < 3) {
        isValid = false;
    }

    if (password.length > 10) {
        isValid = false;
    }

    return isValid;
}
