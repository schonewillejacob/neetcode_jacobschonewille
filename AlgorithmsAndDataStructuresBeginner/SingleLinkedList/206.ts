// Status: Accepted
/**Given the head of a singly linked list, reverse the list, and return the reversed list.
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head: ListNode | null): ListNode | null {
    let reversedHead:ListNode; 
    if (!head) return null; // Guard clause, empty list.

    if (head.next !== null) {
        reversedHead = reverseList(head.next);
        head.next.next = head;
    } else {
        reversedHead = head;
    }
    
    head.next = null;
    return reversedHead;
};