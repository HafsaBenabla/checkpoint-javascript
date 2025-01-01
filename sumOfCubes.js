function sumOfCubes(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i] ** 3;
    }
    return sum;
}