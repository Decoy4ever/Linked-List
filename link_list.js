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

    append(value){
        let node = new Node(value)
        // console.log(`Node inserted into list: Node { data: ${node.value}, next: ${node.nextNode}}`)

        // if the link list is empty create node. This will start of the link list
        // else if the link list is not empty check
        // create a var called current that points to the node that is to be appeneded to an existing linked list
        // traverse the node and update the current.nextNode
        // return the link list
        if(this.head === null){
            
            this.head = node
            // console.log(this.head)
            return this.head
        }else{
            let current = node

            current.nextNode = this.head 

            this.head = current

            return this.head
        }
    }   

    toString(){

        let current = this.head 
        console.log(current)
        let stringOfNodes = "null"
        while(current !== null){
            // print out the values
            let data = current.value
            console.log(data)

            stringOfNodes = `(${data}) -> ` + stringOfNodes
            // traverse the link list
            // console.log(current)
            current = current.nextNode
            
        }

        return stringOfNodes
        
    }
   


}




const list = new LinkedList()
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())

