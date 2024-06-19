let arr=['a','b','c'];
arr[Symbol.iterator]=function*(){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let combination = arr[i] + arr[j];
            yield combination;
        }
    }

};
for (const comb of arr) {
    console.log(comb);
}
