// Iterative solution
function fibs(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    let prev = 0;
    let current = 1;
    let result = [0];

    for (let i = 0; i < n - 1; i++) {
        result.push(current);
        const temp = current;
        current += prev;
        prev = temp;
    }

    return result;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Recursive solution

function fibsRec(n, arr = [], prev = 0, curr = 1) {
    if (n === 0) {
        return arr;
    } else if (n === 1) {
        return [0].concat(arr);
    }

    return fibsRec(n - 1, arr.concat([curr]), curr, curr + prev);
}

console.log(fibsRec(9)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
