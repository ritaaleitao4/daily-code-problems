const hasPairWithSum = (numbers: number[], k: number): boolean => {
    const seen: Set<number> = new Set<number>();

    for (const number of numbers) {
        const complement = k - number;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(number);
    }

    return false;
}

// Examples:
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // Output: true
console.log(hasPairWithSum([10, 15, 3, 7], 14)); // Output: false
console.log(hasPairWithSum([12, 5, 0, 5], 10)); // Output: true
console.log(hasPairWithSum([1, -1], 0)); // Output: true
console.log(hasPairWithSum([1, 1, 0], 0)); // Output: false
