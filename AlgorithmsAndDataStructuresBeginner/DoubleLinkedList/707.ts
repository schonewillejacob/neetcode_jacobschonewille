// Status: In progress
/**
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 */

class DoubleLinkedNode {
    val:number;
    prev:DoubleLinkedNode;
    next:DoubleLinkedNode;
    
    constructor(_val:number|undefined, _prev:DoubleLinkedNode|undefined, _next:DoubleLinkedNode|undefined) {
        this.val  = _val  ? _val  : null;
        this.prev = _prev ? _prev : null;
        this.next = _next ? _next : null;
    }
}

class MyLinkedList {
    head:DoubleLinkedNode;
    tail:DoubleLinkedNode;
    size:number;


    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    get(index: number): number|null {
        if (this.head == null) return -1; //guard clause: empty list
        if (index < 0 || index >= this.size) return -1; //guard clause: empty list


        let result:DoubleLinkedNode;

        // Start at either head||tail, depending on how close index is the the start||end.
        if (index <= this.size/2) { //head, #0
            result = this.head;
            for (let count:number = 0; count < index; count++) {
                result = result.next;
            }
        } else {                    //tail, #this.size
            result = this.tail;
            for (let count:number = (this.size - 1); count > index; count--) {
                result = result.prev;
            }
        }
        
        return result.val;
    }


    addAtHead(val: number): void {
        this.size++;

        if (this.head == null) { //guard clause: empty list
            this.head = new DoubleLinkedNode(val, undefined, undefined);
            this.tail = this.head;
            return;
        }

        this.head.prev = new DoubleLinkedNode(val, undefined, this.head);
        this.head = this.head.prev
        return;
    }


    addAtTail(val: number): void {
        if (this.head == null) { //guard clause: empty list
            this.addAtHead(val);
            return;
        }

        this.size++;
        this.tail.next = new DoubleLinkedNode(val, this.tail, undefined);
        this.tail = this.tail.next;
        return;
    }


    addAtIndex(index: number, val: number): void {
        if (index > this.size || index < 0) return; //guard clause: out of bounds
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        
        let target:DoubleLinkedNode = this.head;
        // Start at either head||tail, depending on how close index is the the start||end.
        if (index <= this.size/2) { //head, #0
            for (let count:number = 0; count < index; count++) {
                target = target.next;
            }
        } else {                    //tail, #this.size
            target = this.tail;
            for (let count:number = (this.size - 1); count > index; count--) {
                target = target.prev;
            }
        }

        this.size++;
        const newNode = new DoubleLinkedNode(val, target.prev, target);
        target.prev.next = newNode;
        target.prev = newNode;

        return;
    }


    deleteAtIndex(index: number): void {
        if (index >= this.size || index < 0) return; //guard clause: out of bounds

        let target:DoubleLinkedNode;
        // Start at either head||tail, depending on how close index is the the start||end.
        if (index <= this.size/2) { //head, #0
            target = this.head;

            for (let count:number = 0; count < index; count++) {
                target = target.next;
            }

        } else {                    //tail, #this.size
            target = this.tail;
            for (let count:number = (this.size - 1); count > index; count--) {
                target = target.prev;
            }
        }

        this.size--;

        if (target.prev == null)  { //guard clause: deleting head node.
            this.head = target.next
            return;
        } else if (target.next == null)  {//guard clause: deleting tail node.
            this.tail = target.prev;
            return;
        }
        // deleting inner node.
        target.prev.next = target.next;

        return;
    }

}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */