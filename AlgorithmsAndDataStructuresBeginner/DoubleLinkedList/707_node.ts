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

}

class MyLinkedList {
    val: number
    next: MyLinkedList | null
    prev: MyLinkedList | null

    constructor(val?: number, next?: MyLinkedList | null, prev?: MyLinkedList | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }

    get(index: number): number {
        console.log("get");
        let result:MyLinkedList = this;
        while (result.prev !== null) {
            result = result.prev;
        }

        for (let i:number = 0; i < index+1; i++) {
            if (result.next !== null) {
                result = result.next;
            } else {
                console.log("Failed to get, out of bounds.");
                return -1;
            }
        }

        return result.val;
    }

    addAtHead(val: number): void {
        console.log("addAtHead");
        let head:MyLinkedList = this;
        if (head !== null) while (head.prev !== null) head = head.prev;
        
        head.prev = new MyLinkedList(val, head, null);
        return;
    }

    addAtTail(val: number): void {
        console.log("addAtTail");
        let tail:MyLinkedList = this;
        if (tail !== null) while (tail.next !== null) tail = tail.next;

        tail.next = new MyLinkedList(val, null, tail);
        return;
    }

    addAtIndex(index: number, val: number): void {
        console.log("addAtIndex");

        let previousNode:MyLinkedList = this;

        while (previousNode.prev !== null) {
            previousNode = previousNode.prev;
        } // previousNode = MyLinkedList[0]
        
        if (previousNode.next.next !== null) {
            previousNode.next = new MyLinkedList(val, previousNode, previousNode.next);
        }

        for (let i:number = 0; i < index; i++) {
            if (previousNode.next !== null) {
                previousNode = previousNode.next;
            } else {
                console.log("Failed to insert, out of bounds.");
                return;
            }
        }

        if (previousNode.next.next !== null) {
            previousNode.next = new MyLinkedList(val, previousNode, previousNode.next);
        } else {
            previousNode.next = new MyLinkedList(val, previousNode, null);
        }
        return;
    }

    deleteAtIndex(index: number): void {
        console.log("deleteAtIndex");
        let removed:MyLinkedList = this;

        while (removed.prev !== null) {
            removed = removed.prev;
        } // removed = MyLinkedList[0]
        
        for (let i:number = 0; i < index; i++) {
            if (removed.next !== null) {
                removed = removed.next;
            } else {
                console.log("Failed to remove, out of bounds.");
                return;
            }
        } // removed = MyLinkedList[index]

        if (!removed.prev && removed.next) {
            removed.next.prev = null;
        } else if (removed.prev && !removed.next) {
            removed.prev.next = null;
        } else {
            removed.prev.next = removed.next;
            removed.next.prev= removed.prev;
        }

        delete removed.val;
        delete removed.next;
        delete removed.prev;
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