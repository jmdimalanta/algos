class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
    }

    add(value){
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
        return this;
    }

    display(){
        console.log("Displaying all node values")
        let current = this.head;
        while (current){
            console.log(current.value)
            current = current.next;
        }
        console.log("The end")
        return this.newHead;
    }
}

const array = [5,8,9,10];

const list = new List();

for (let index = 0; index < array.length; index++){
    const value = array[index];
    console.log('adding '+ value);
    list.add(value);
}

list.display();