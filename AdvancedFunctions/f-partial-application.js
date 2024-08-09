function logger(service, text) {
    console.log(`${service} service: ${text}`);
}

logger('admin', 'Successful user registration');

// Partial application with function wrapper
const adminLog = (text) => logger('admin', text);
adminLog('User has been deleted');

// Partial application with bind
const userLog = logger.bind(null, 'user');
userLog('Post created');

// Normal function
const sum = (a, b, c) => {
    return a + b + c;
};

// Curry function
const currySum = a => b => c => a + b + c;

const first = currySum(5);
const second = first(10);
const res = second(15);
console.log(res);

const result = currySum(5)(10)(15);
console.log(result);
