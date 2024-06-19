class DataStream{
    constructor(data,chunkSize){
        this.data=data;
        this.chunkSize=chunkSize;
    }
    [Symbol.iterator](){
        let currIdx=0;

        return {
            next:()=>{
                if(currIdx<this.data.length){
                    let result={
                        value:this.data.slice(
                            currIdx,
                            currIdx+this.chunkSize),
                        done:false
                    }
                    currIdx+=this.chunkSize;
                    return result;
                }
           return{value:undefined,done:true};
            }
        }
    }
}
let data="ITTalents";
const dataStream=new DataStream(data,2);
for (const chunk of dataStream) {
    console.log(chunk);
}
