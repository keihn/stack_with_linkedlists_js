'use strict'

/**
 * Stack constructor
 */
function Stack(){
    this.head = null;
    this.size = 0;
    this.newNode = null
}



/**
 * Element constructor - creates a new element
 */
class Element {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


/**
 * Adds an element to the stack
 */

Stack.prototype.push = function(element){
    var node = new Element(element)
    if(this.head == null){
        this.head = node
        this.size += 1
        return this.head.data
    }

    var newElement = node;
    newElement.next = this.head
    this.head = newElement
    this.size += 1
    return this.head.data
    
}

/**
 * Removes an element from the stack
 */
Stack.prototype.pop = function(element){
    if(this.isEmpty()){
        console.log('Stack is empty')
    }

    //check if we are dealing with the head node
    if(element = this.head){
        element = this.head
        this.head = this.head.next
        element.next = null
        return element.data;
    }
}


/**
 * Check if stack is empty
 * @return 
 */
Stack.prototype.isEmpty = function(){
    if(this.size == 0){
        return true;
    }

    return false;
}

/***
 * Check the top element in stack
 * 
 */
Stack.prototype.top = function(){
    if(this.isEmpty()){
        console.log('Stack is empty');
        return
    }

    return this.head.data
}





