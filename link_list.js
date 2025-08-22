class LinkedList{

    constructor(){ 
    }
    
    // 1st do the following
    // create the head node
    // create the tail node
    // create a node with value and nextaddr 
    // link the node to the header

    linkNode(value){

    }
}

// Node contains data value and addr/next addr
class Node{
    
    createNode(value = null,nextAddr = null){
        this.value = value
        this.nextAddr = nextAddr
    }
}

let n1 = new Node()
let n2 = new Node()

n1.createNode(5)
n2.createNode(4)
console.log(n1)
console.log(n2)
