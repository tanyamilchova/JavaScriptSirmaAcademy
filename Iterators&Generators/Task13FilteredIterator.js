let input=[1,2,3,4,5];
input[Symbol.iterator]=function(){
    let idx=0;
    let even=input.filter(x=>x%2==0)
    return{
        next(){
            return{
                value:even[idx++],
                done:idx>even.length
            }
        }
    }
};
for (const iterator of input) {
    console.log(iterator);
}