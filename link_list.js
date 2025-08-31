/**
 * Node class contains following attributes.
 * 1. data value 
 * 2. next/addr 
*/ 
class Node{
    constructor(value = null, nextNode = null){
        this.value = value
        this.nextNode = nextNode
    }
}

/**
 * Linked list will contain the following functions for a linked list 
 * 1. `append(value)` adds a new node containing value to the end of the list
 * 2. `prepend(value)` adds a new node containing value to the start of the list
 * 3. `size` returns the total number of nodes in the list
 * 4. `head` returns the first node in the list
 * 5. `tail` returns the last node in the list
 * 6. `at(index)` returns the node at the given index
 * 7. `pop` removes the last element from the list
 * 8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
 * 9. `find(value)` returns the index of the node containing value, or null if not found.
 * 10. `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
 */
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
            // traverseing through link list
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
        return -1

    }

    // Inserts a new node with the provided value at the given index.
    // 1. Traverse the current link list and find the node at index - 1
    // 2. Set the current.nextNode to point to the newly inserted node
    // 3. set the newly inserted node to the original node that was originally in the link list
    insertAt(value, index){

        let current = this.head 
        let node = new Node(value)
        let count = 0

        // if the index is greater than size of link list return an error
        let sizeOfList = this.size()
        if(index > sizeOfList){
            throw new Error(`The number provided for the index is greater than the size of current Link list.`)
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

    // removeAt(index) that removes the node at the given index.
    // traverse the list to find the node at index - 1 
    // set node to null
    // point the node at index - 1 to the next current node
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

        console.log("\n")
        console.log("Final Linked List is shown below")
        // console.log(current)
        let stringOfNodes = ""
        while(current !== null){
            // print out the values
            let data = current.value

            stringOfNodes += `(${data}) -> ` 

            // traverse the link list
            // console.log(current)
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
// list.append("snake");

// list.append(1);
// list.append(2);
// list.append(3);

// Prepend
list.prepend("hamster");
console.log(`Original Link List`)
console.log(list.toString())

// list.prepend("turle");
// list.prepend("monkey");

// console.log(list.size())
// console.log(list.headNode())
// console.log(list.tailNode())

// at(Index)
// console.log(list.at(0))
// console.log(list.at(1))
// console.log(list.at(2))
// console.log(list.at(3))
// console.log(list.at(4))
// console.log(list.at(5))
// console.log(list.at(-1))

// pop()
// console.log(list.pop())
// console.log(list.contains(`dog`))
// console.log(list.contains(`hamster`))
// console.log(list.contains(`cat`))
// console.log(list.contains(5))
// console.log(list.find(`dog`))
// console.log(list.find("cat"))
// console.log(list.find("dingo"))


// console.log(list.find(""))
// console.log(list.find(-5))
// console.log(list.find(1))

// insertAt()
// repalce cat at index 1 with hamster
// console.log(list.insertAt(`hamster`,1))
// console.log(list.size())

// console.log(list.insertAt(`chicken`,2))
// console.log(list.size())

// console.log(list.insertAt(`chicken`,7))

// remove cat
// console.log(list.removeAt(1))
console.log(list.removeAt(2))
console.log(list.toString())

