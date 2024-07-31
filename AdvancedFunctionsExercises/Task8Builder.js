// 8. Function Chaining
// Create an object with methods that manipulate a string (e.g., toUpperCase,
// toLowerCase). Ensure the methods return this so the methods can be chained together.
// stringManipulator.setValue(&#39;Hello&#39;)
// .toUpperCase()
// .print()
// .toLowerCase()
// .print();

const builder={
    newStr: '',
    toUpperCase: function(str){
        this.newStr=str.toUpperCase();
        console.log(this.newStr);
        return this;
    }
    ,   toLowerCase: function(str){
        this.newStr=str.toLowerCase();
        console.log(this.newStr);
        return this;
    },
    print: function(){
        console.log(this.newStr);
        return this;
    }
 
}


builder.toUpperCase('Penka').print().toLowerCase('Penka').print();
