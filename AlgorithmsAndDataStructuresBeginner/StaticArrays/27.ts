//STATUS: Accepted
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums: number[], val: number): number {
    let k: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        } else {
            k++;
        }
    }

    return k;
};