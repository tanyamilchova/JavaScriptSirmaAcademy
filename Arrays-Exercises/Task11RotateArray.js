// The array should be rotated to the right side, meaning that the last element should become
// the first, upon rotation.
// You receive an array of strings and count of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one
// line, separated by a single space.
let arr=[ "1","2","3","4"];
let num=2;
for (let j = 0; j < num; j++) {
    let start=arr[0];
    let end=arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {

        let current=arr[i];
        arr[i]=start;
        start=current;
        }
        arr[0] = end;
    }
    console.log(arr);
  