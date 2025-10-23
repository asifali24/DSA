//sun of first +ve n no

const recSumNNumber = (n) => {
    if (n <= 1) return n
    return n + recSumNNumber(n-1)
}

console.log(recSumNNumber(5), "======")

//sum of all the no in array via recurssion

let arr = [2, 4, 5, 7, 8]

const arraySum = (a) => {
    if (!a.length) return 0
    return a.pop() + arraySum(a)
}

console.log("====",arraySum(arr))