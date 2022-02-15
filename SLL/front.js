class Node{
    constructor(val){
        this.data = data;
        this.next=null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
            if(!this.head){
                this.head = new_node;
                return this;
            }
            new_node.next = this.head;
            this.head = new_node;
            return this;
    }
    removeFront(){
        if (this.head == null){
            return this.head;
        }
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode = null;
        return this.head;
    }
    front(){
        if(this.head == null){
            return null;
        } else {
            return this.head.val;
        }
    }
}
