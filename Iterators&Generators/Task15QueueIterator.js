class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(elem){
        this.items.push(elem);
    }
    dequeuePop(){
        if(this.isEmpty()){
            return "Empty array";
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty()){
            return "No elements in the Queue"
        }
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items.join(" ");
    }
    [Symbol.iterator]=function(){
      let items=this.items.slice();
        return{
            next(){
                if(items.length>0){
                    return{
                        value:items.shift(),
                        done:false
                }
            }else{
                    return {
                        done:true
                    }
                }
            }
        };
    }
};


let queue=new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// console.log( queue.print());

// console.log( queue.dequeuePop());
// console.log( queue.front());
// console.log( queue.print());
// console.log( queue.size());
// console.log( queue.isEmpty());

for (const iterator of queue) {
    console.log(iterator);
}
