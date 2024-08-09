// 6. Curry a Function
// Create a function that takes three arguments and returns their product. Curry this
// function so it can be called with one argument at a time.


const multiply=a=>{
    return b=>{
        return c=>{
            return a * b * c;
        }
    }
}

console.log(multiply(2)(3)(4));