class OddIterator{
    constructor(arr){
        this.arr=arr;
    }
    [Symbol.iterator]() {
        let odd=this.arr.filter(number=>number%2!==0);
        let idx=0;
        return{
            next(){
                return{
                    value:odd[idx++],
                    done:odd.length<idx
                }

            }
        }
    }
}
const arr=[1,2,3,4,5,6,7,8,9,10];
const oddValues=new OddIterator(arr);
for (const value of oddValues) {
    console.log(value);
}