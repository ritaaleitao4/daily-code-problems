const productExceptSelf = (nums: number[]): number[] => {
    const length: number = nums.length;
    const result: number[] = new Array(length).fill(1);

    let leftProduct: number = 1;
    for (let i: number = 0; i < length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct: number = 1;
    for (let i: number = length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4, 5])); // Output: [120, 60, 40, 30, 24]
console.log(productExceptSelf([3, 2, 1])); // Output: [2, 3, 6]