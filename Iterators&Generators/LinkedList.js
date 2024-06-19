class CustomNode
{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(head){
        this.head=head;
    }

[Symbol.iterator](){
    let current=this.head;
    return{
        next() {
            const result={
                value:current,
                done:!current
            }
            current=current?.next;
            return result;
        }
    }
}
}
let lastNode=new CustomNode
("Stamat");
let middleNode=new CustomNode
("Gosho");
let head=new CustomNode
("Pesho");

head.next=middleNode;
middleNode.next=lastNode;

let linkedList=new LinkedList(head);
let currNode=linkedList.head;
while( currNode){
console.log(currNode.data);
currNode=currNode.next;
}
