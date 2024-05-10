function mergeSort(array) {
    let length = array.length;

    if (length === 1) {
        return array;
    }

    // sort left
    let left = mergeSort(array.slice(0, length / 2));
    // sort right
    let right = mergeSort(array.slice(length / 2));

    // merge
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // insert remaining elements
    if (left.length) {
        result.push(...left);
    } else if (right.length) {
        result.push(...right);
    }

    return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([7, 2, 5, 4, 1, 6, 0, 3]));
// [0, 1, 2, 3, 4, 5, 6, 7]
