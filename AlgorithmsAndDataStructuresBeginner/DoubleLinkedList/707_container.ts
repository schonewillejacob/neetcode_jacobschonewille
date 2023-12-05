// Status: In Progress
/**
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

class LinkedListNode {
    val: number
    next: LinkedListNode | null
    prev: LinkedListNode | null

    constructor(val?: number, next?: LinkedListNode | null, prev?: LinkedListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }
}

class MyLinkedList {
    head:LinkedListNode | null;
    tail:LinkedListNode | null;
    
    constructor() {
        this.head = null;
        this.tail = null;
    }

    get(index: number): number {
        if (this.head === null) return -1; // Guard clause: empty list.
        let targetNode:LinkedListNode = this.head;
        
        for (let i:number = 0; i < index; i++) {
            if (targetNode.next !== null) { // Guard clause: premature ending
                targetNode = targetNode.next;
            } else {
                return -1;
            }
        }

        return targetNode.val;
    }

    addAtHead(val: number): void {
        if (this.head === null) {
            this.head = new LinkedListNode(val, null, null);
            this.tail = this.head;

            return;
        }

        this.head.prev = new LinkedListNode(val, this.head, null);;
        this.head = this.head.prev;
    }

    addAtTail(val: number): void {
        if (this.tail === null) { // Guard clause: empty list.
            this.addAtHead(val);
            return;
        } 

        this.tail.next = new LinkedListNode(val, null, this.tail);
        this.tail = this.tail.next;
    }

    addAtIndex(index: number, val: number): void {
        if (this.head === null) { // Guard clause: empty list.
            this.addAtHead(val);
            return;
        }
        let targetNode:LinkedListNode = this.head;
        
        for (let i:number = 1; i < index; i++) { // Runs one time less to end up before target index.
            if (targetNode.next !== null) { // Guard clause: premature ending
                targetNode = targetNode.next;
            } else {
                return;
            }
        }

        console.log(targetNode);
        targetNode.next.prev = new LinkedListNode(val, (targetNode.next ? targetNode.next : null), targetNode);;
        targetNode.next = targetNode.next.prev;

        return;
    }

    deleteAtIndex(index: number): void {
        if (this.head === null) return; // Guard clause: empty list.
        let targetNode:LinkedListNode = this.head;
        
        for (let i:number = 0; i < index; i++) {
            if (targetNode.next !== null) { // Guard clause: premature ending

                targetNode = targetNode.next;
            } else {
                return;
            }
        }

        if (targetNode.prev !== null) targetNode.prev.next = (targetNode.next ? targetNode.next : null);
        if (targetNode.next !== null) targetNode.next.prev = (targetNode.prev ? targetNode.prev : null);


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