//Status: Accepted
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
//Specifically, ans is the concatenation of two nums arrays.

function getConcatenation(nums: number[]): number[] {
    return nums.concat(nums);
};