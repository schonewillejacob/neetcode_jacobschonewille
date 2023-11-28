//STATUS: Aceepted
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

function removeDuplicates(nums: number[]): number {
    let left: number = 0;

    for (let right: number = 0; right < nums.length; right++) {
        // if the number is different at left and right, add it to the array @left+1
        if (nums[left] !== nums[right]) {
            nums.splice(left+1, 0, nums[right]);
            left++;
        }
    }

    return (left + 1);
};