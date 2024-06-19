// Create a class StringContainer, which holds the single string and a length property. The
// class should be initialized with a string and an initial length. The class should always keep
// the initial state of its given string.
// Name the two properties innerString and innerLength.
// There should also be functional for increasing and decreasing the initial length property.
// Implement function increase(length) and decrease(length), which manipulate the length
// property with the given value.
// The length property is a numeric value and should not fall below 0. It should not throw any
// errors, but if an attempt to decrease it below 0 is done, it should be automatically set to 0.
// You should also implement functionality for toString() function, which returns the string, the
// object was initialized with. If the length of the string is greater than the length property, the
// string should be cut from right to left, so that it has the same length as the length
// property, and you should add 3 dots after it if such truncation was done.
// If the length property is 0, just return 3 dots.
// stringContainer.js
// let test = new StringContainer(&quot;Test&quot;, 5);
// console.log(test.toString()); // Test
// test.decrease(3);
// console.log(test.toString()); // Te...
// test.decrease(5);

// e: office@sirma.bg a: 135 Tsarigradsko Shosse, blvd.
// m: +359 2 9768310 1784 Sofia, Bulgaria

// sirma.com
// console.log(test.toString()); // ...
// test.increase(4);
// console.log(test.toString()); // Test
// Store the initial string in a property, and do not change it. Upon calling the toString()
// function, truncate it to the desired value and return it.
class StringContainer{
    constructor(initialString,length){
        this.initialString=initialString;
        this.length=length;
    }
    increaceLength(numToIncreace){
        this.length+=numToIncreace;
    }
    decreaceLength(numToDecreace){
        if(this.length-numToDecreace>=0){
            this.length-=numToDecreace;
        }else{
            this.length=0;
        }
   }
   toString()  {
        if(this.length===0){
            return "...";
        }else{
            if(this.length<this.initialString.length){
                let resStr=this.initialString.slice(0,this.length);
                resStr=resStr+"...";
                return resStr;
            }    else{
            return this.initialString;
            }
        }
    }
}

let test=new StringContainer("Test",5);
console.log(test.toString());
test.decreaceLength(3);
console.log(test.toString());
test.decreaceLength(5);
console.log(test.toString());
test.increaceLength(4);
console.log(test.toString());
