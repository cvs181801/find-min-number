//find the smallest number in the numbers array

array1 = [-5, -6, -9, -13];

function findMin(nums) {
    let min = nums[0];
    for (let i=0; i< nums.length; i++ ) {
        if (nums[i] -= min) {
            min = nums[i];
        }
    }
    return min;
}

console.log(findMin(array1));