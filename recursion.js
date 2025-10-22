//sun of first +ve n no

const recSumNNumber = (n) => {
    if (n <= 1) return n
    return n + recSumNNumber(n-1)
}

console.log(recSumNNumber(5),"======")