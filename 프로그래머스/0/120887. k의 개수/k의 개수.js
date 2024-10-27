function solution(i, j, k) {
    let result = 0;
    const kStr = k.toString();

    for (let a = i; a <= j; a++) {
        const aStr = a.toString();
        for (let char of aStr) {
            if (char === kStr) {
                result += 1;
            }
        }
    }
    return result;
}
