// Write a program that manipulates an array of numbers.
//  Add {number}: add a number to the end of the array
//  Remove {number}: remove number from the array
//  RemoveAt {index}: removes number at a given index
//  Insert {number} {index}: inserts a number at a given index
// Print the final state of the array (separated by spaces)
// The input comes as an array of strings. First input will be a string containing the array to
// manipulate. Every other command you receive will be a string.
// The output is the manipulated array printed on the console on a single line, separated by
// space.
// Example
// Input Output
// [&quot;4 19 2 53 6 43&quot;,
// &quot;Add 3&quot;,
// &quot;Remove 2&quot;,
// &quot;RemoveAt 1&quot;,
// &quot;Insert 8 3&quot;]

let array = "4 19 2 53 6 43";
let actions = "Add 3, Remove 2, RemoveAt 1, Insert 8 3";

let arrInt = populateIntArray(array);
takeActions(arrInt, actions);
console.log(arrInt);

function takeActions(arrInt, actions) {
    let actArr = actions.split(",");
    // console.log(actArr);
    for (let i = 0; i < actArr.length; i++) {
        let manipulation = actArr[i].trim();
        let manipArr = manipulation.split(" ");

        let act = manipArr[0];
        switch (act) {
            case "Add":
                arrInt = add(arrInt, parseInt(manipArr[1].trim()));
                break;
            case "Remove":
                arrInt = remove(arrInt, parseInt(manipArr[1].trim()));
                break;
            case "RemoveAt":
                arrInt = removeAt(arrInt, parseInt(manipArr[1].trim()));
                break;
            case "Insert":
                arrInt = insert(arrInt, parseInt(manipArr[1].trim()), parseInt(manipArr[2].trim()));
                break;
        }
    }
}

function populateIntArray(array) {
    let arrStr = array.split(" ");
    let arr = arrStr.map(str => parseInt(str));
    // console.log(arr);
    return arr;
}

function add(arr, num) {
    arr.push(num);
    // console.log("Add  " + arr);
    return arr;
}

function removeAt(arr, pos) {
    arr.splice(pos, 1);
    // console.log("RemoveAt " + arr);
    return arr;
}

function remove(arr, num) {
    let index = arr.indexOf(num);
    if (index !== -1) {
        arr = removeAt(arr, index);
    }
    // console.log("Remove " + arr);
    return arr;
}

function insert(arr, num, position) {
    arr.splice(position, 0, num);
    // console.log("Insert  " + arr);
    return arr;
}
