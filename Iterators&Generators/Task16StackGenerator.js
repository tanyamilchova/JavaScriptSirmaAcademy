class Stack{
    constructor(){
        this.items=[];
    }
    enqueue(elem){
        this.items.push(elem);
    }
    pop(){
        if(this.isEmpty()){
            return "Empty array";
        }
        return this.items.splice(this.items.length-1,1);
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty()){
            return "No elements in the Queue"
        }
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    print(){
        let revertedItems=this.items.slice();
        let start=0;
        for (let i=revertedItems.length-1;i>=0;i--){
         revertedItems[start]=this.items[i];
         start++;
        }
        return revertedItems.join(" ");
    }
    [Symbol.iterator]=function(){
        let copyItems=this.items.slice();
        return{
            next(){
                if(copyItems.length>0){
                    return{
                        value:copyItems.pop(),
                        done:false
                    }
                }else{
                        return{
                            done:true
                        }
                    }
                }
            }
        };
}

let stack=new Stack();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
stack.enqueue(4);

for (const iterator of stack) {
    console.log(iterator);
}


