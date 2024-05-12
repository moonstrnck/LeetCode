/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in numIndices) {
            return [numIndices[difference], i];
        }
        numIndices[nums[i]] = i;
    }
};