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

class LinkedList{
    
    /**
     * 
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
// list.append("")
list.append("dog");
list.append("cat");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())

