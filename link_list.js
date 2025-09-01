 class Node{
    constructor(value = null, nextNode = null){
        this.value = value
        this.nextNode = nextNode
    }
}

class LinkedList{

    constructor(){
        this.head = null
    }

    // 1. `append(value)` adds a new node to the END of the list
    append(value){

        let node = new Node(value)
        if(this.head === null){
            this.head = node
            return this.head;
        }

        let current = this.head 
        
        while(current.nextNode !== null){

            // traverse through link list
            current = current.nextNode 
        }

        current.nextNode = node
        return this.head
    } 

    // 2. `prepend(value)` adds a new node containing value to the START of the list
    prepend(value){

        let node = new Node(value)
        let current = this.head
        node.nextNode = current
        this.head = node
        return this.head

    }

    //  3. `size` returns the total number of nodes in the list
    size(){
        let numOfNodes = 0
        let current = this.head 

        if(current === null){
            return 0;
        }

        while(current !== null){
            // traversing linked list
            current = current.nextNode 

            // every time reach a node increment the numOfNodes
            numOfNodes++
        }

        return numOfNodes
    }


    //  4. `head` returns the first node in the list
    headNode(){
        return this.head
    }

    //  5. `tail` returns the last node in the list
    tailNode(){
        // keep track of positions we traverse throughout link list
        let count = 0

        // Find the max size of the link list
        let sizeOfList = this.size()

        // create variable tail that will store the last node
        let tail = null

        let current = this.head
        while(count < sizeOfList){
            tail = current
            current = current.nextNode
            count++
        }

        return tail
    }

    // 6. `at(index)` returns the node at the given index
    at(index){
        let count = 0
        let current = this.head 
        let nodeSelected = null
        let maxSize = this.size()

        if(index < 0 || index >= maxSize) throw new Error("Out of Bounds");
        
        while(current !== null){
            if(count === index){
                nodeSelected = current
            }
            current = current.nextNode
            count++
        }

        return nodeSelected
    }

    // 7. `pop` removes the last element from the list
    pop(){
   
        let current = this.head 
        let sizeOfList = this.size()

        let temp = null
        let count = 0

        // traverse the link list and find node before the tail node
        while(count < sizeOfList - 1){
            temp = current
            current = current.nextNode 
            count++
        }

        temp.nextNode = null
        return this.head
    }

    // 8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        let current = this.head
        let bool = false

        while(current !== null){
            if(value === current.value){
                bool = true
            }else{
                bool
            }
            current = current.nextNode
        }
        return bool
    }

    // 9. `find(value)` returns the index of the node containing value, or null if not found.
    find(value){
        let current = this.head
        let index = 0

        while(current !== null){

            if(value === current.value){
                return index
            }
            current = current.nextNode
            index++
        }

        // value does not exist in the link list
        console.error(`The Index of ${value} is currently not found in the link list`)
        

    }

    // 10. Inserts a new node with the provided value at the given index.
    insertAt(value, index){

        let current = this.head 
        let node = new Node(value)
        let count = 0

        // if the index is greater than size of link list return an error
        let sizeOfList = this.size()
        if(index > sizeOfList){
            console.error(`The number provided for the index is greater than the size of current Link list.`)
        }

        let previous = null
        while(count < index && current !== null ){
            previous = current
            current = current.nextNode
            count++
        }

        node.nextNode = previous.nextNode
        previous.nextNode = node 

        // increase the size of the link list 
        sizeOfList++

        return this.head
      
    }

    // 11. removeAt(index) that removes the node at the given index.
    removeAt(index){

        let count = 0
        let current = this.head 

        let sizeOfList = this.size()
        if(index > sizeOfList || sizeOfList === null){
            throw new Error(`Out of Bounds`)
        }

        let previous = null
        while(current !== null && count < index){
            
            previous = current
            current = current.nextNode 
            count++
        }

        previous.nextNode = previous.nextNode.nextNode
        sizeOfList--
        return this.head
    }

    toString(){

        let current = this.head 
        let stringOfNodes = ""

        while(current !== null){

            // print out the values
            let data = current.value
            stringOfNodes += `(${data}) -> ` 
            current = current.nextNode
            
        }

        return stringOfNodes + "null"
    }
}




const list = new LinkedList()
// Append
list.append("dog");
list.append("cat");
list.append("dingo");

// Prepend
// list.prepend("hamster");
// list.prepend("turle");

// find size of link list
// console.log(list.size())

// find the head node of current link list
// console.log(list.headNode())

// find the tail node of current link list
// console.log(list.tailNode())

// find the nodes at certain index
// console.log(list.at(0))
// console.log(list.at(2))
// console.log(list.at(3))
// console.log(list.at(-1))

// pop()
// console.log(list.pop())

// check if the value exists in link list
// console.log(list.contains(`dog`))
// console.log(list.contains(`cat`))
// console.log(list.contains(5))

// finding the index of a node
// console.log(list.find(`dog`))
// console.log(list.find("cat"))
// console.log(list.find("dragon"))

// inserting new nodes in link list
// repalce cat at index 1 with hamster
// console.log(list.insertAt(`hamster`,1))
// console.log(list.size())

// remove node at specific position in link list
// console.log(list.removeAt(1))
console.log(list.toString())
