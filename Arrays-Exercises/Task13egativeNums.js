let arr = ["7", "-2", "-1", "8", "-4", "9"];
let newArr = new Array(arr.length);
let result = "";
let resultBuilder = "";
let tempAppended = "";
let start = true;

for (let i = 0; i < arr.length; i++) {
    let element = parseInt(arr[i]);
    if (element >= 0) {
        result += arr[i];
    } else {
        if (start) {
            resultBuilder += arr[i];
            start = false;
        } else {
            tempAppended = arr[i] + resultBuilder;
            resultBuilder = tempAppended;
            tempAppended = "";
        }
    }
}

console.log(resultBuilder + result);