class Range{
    constructor(start,end){
        this.start=start;
        this.end=end;
    }
    [Symbol.iterator](){
        let currNum=this.start;
        return {
           
                next:()=>{
                // let result={
                //     value:currNum,
                //     done: currNum>this.end
                // }
                if(currNum<=this.end){
                    return{value:currNum++,done:false};
                }
                return {value: undefined, done: true}
                }
            }
        }
    }

    let range= new Range(5,10);
    for (const num of range) {
        console.log(num);
    }
