// You will receive an array of products. Print a numbered array of all the products ordered
// by name.
// Example

// e: office@sirma.bg a: 135 Tsarigradsko Shosse, blvd.
// m: +359 2 9768310 1784 Sofia, Bulgaria

// sirma.com
// Input Output
// [&quot;Potatoes&quot;
// ,
// &quot;Tomatoes&quot;
// , &quot;Onions&quot;,
// &quot;Apples&quot;]

// 1.Apples
// 2.Onions
// 3.Potatoes
// 4.Tomatoes
let arr = ["Potatoes", "Tomatoes", "Onions", "Apples"];

// Bubble Sort by the first character of each string
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].charAt(0) > arr[j + 1].charAt(0)) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

// Print the sorted array
for (let i = 0; i < arr.length; i++) {
    console.log((i + 1) + "." + arr[i]);
}

