//Write a function that accepts text in JSON format and converts it to an object. Print all
// values in the following format: {key}: {value}
let jsonStr='{"name": "Ivan", "age": 40, "town": "Sofia"}';

function parseJSONToObjecct(jsonStr){
    return JSON.parse(jsonStr);
}
let obj=parseJSONToObjecct(jsonStr);
console.log(obj);