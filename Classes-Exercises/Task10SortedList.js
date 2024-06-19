// Implement a class List, which keeps a list of numbers, sorted in ascending order. It must
// support the following functionality:
//  add(element) - adds a new element to the collection
//  remove(index) - removes the element at position index

// e: office@sirma.bg a: 135 Tsarigradsko Shosse, blvd.
// m: +359 2 9768310 1784 Sofia, Bulgaria

// sirma.com
//  get(index) - returns the value of the element at position index
//  size - number of elements stored in the collection
// The correct order of the elements must be kept at all times, regardless of which operation
// is called. Removing and retrieving elements shouldn’t work if the provided index points
// outside the length of the collection (either throw an error or do nothing). Note the size of
// the collection is not a function.
// Sample Input Output
// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
class List{
  constructor(){
    this.arr=[];
  }
    add(element){
        if (typeof element === 'number') {
            let i = 0;
            while (i < this.arr.length && this.arr[i] < element) {
                i++;
            }
            this.arr.splice(i, 0, element);
        }
    }
    remove(index){
        if(index>=0 && index<this.arr.length ){
            this.arr.splice(index,1);
        }
    }
    get(index){
        if(index>=0 && index<this.arr.length ){
            return this.arr[index];
        }
    }
    size(){
       return this.arr.length;
    }
}
let list=new List;
list.add(5);
list.add(6);
list.add(7);
console.log(list.arr);
console.log(list.get(1));
list.remove(1);
console.log(list.arr);
console.log(list.get(1));
list.add(5);
list.add(3);
list.add(7);
console.log(list.arr);

