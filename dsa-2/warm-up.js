//find the largest no
let arr = [7, 9, 1, 2, 3, 5,0,0,0,0,1,1,1,9,9,9,10]

const findLasgest = (a) => {
    let l = -Infinity
    a.forEach((e) => {
        if(e > l) l= e
    })
    return l
}

// console.log(findLasgest(arr))


const findSecLargest = (a) => {
    if (a.length < 2) return null
    let l = -Infinity
    let sL = -Infinity
    
    a.forEach((e) => {
        if (e > l) {
            sL = l
            l=e
        }
    })
    return {l,sL}
}

// console.log(findSecLargest(arr))


const printStar = (l) => {
    for (let i = 0; i < l; i++){
        let p =""
        for (let j = 0; j <= i; j++){
            p =p+"*"
        }
        console.log(p)
    }
    
}
// printStar(5)


const printStarDigit = (l) => {
    for (let i = 0; i < l; i++){
        let p =""
        for (let j = 0; j <= i; j++){
            p =p ? p+ " "+ (j+1).toString():p+ (j+1).toString()
        }
        console.log(p)
    }
    
}
// printStarDigit(5)



const revPrintStarDigit = (l) => {
    for (let i = 0; i < l; i++){
        let p =""
        for (let j = l - i; j > 0; j--){
            p = p? j.toString() +" "+ p:j.toString() + p
        }
        console.log(p)
    }
    
}
// revPrintStarDigit(5)


const revPrintStarDigit2 = (l) => {
    for (let i = 0; i < l; i++){
        let p =""
        for (let j = l - i; j > 0; j--){
            p = p? p+" "+ (((l-i)-j)+1).toString() : p+ (((l-i)-j)+1).toString()
        }
        console.log(p)
    }
    
}

// revPrintStarDigit2(5)



const revPrintStar = (l) => {
    for (let i = 0; i < l; i++){
        let p =""
        for (j = 0; j < (l - i); j++){
            p = p? p+ " "+ "*" : p+"*" 
        }
        console.log(p)
    }
    
}

// revPrintStar(5)

const printRightAlignStar = (l) => {
    for (i = 0; i < l; i++){
        let p=""
        for (j = 0; j < l; j++){
            let sp = l - (i + 2)
            p =  j==0  ? p + (j <= sp ? " " : "*"):p + " "+ (j <= sp ? " " : "*")
        }
        console.log(p)
    }
}
// printRightAlignStar(7)

const print10 = (n) => {

    for (let i = 1; i <= n; i++){
        let p=""
        for (let j = 1; j <= i; j++){
            p =p + (j % 2 ===0 ? 0 : 1 ).toString()
        }
        console.log(p)
    }
    
}

// print10(5)

const printStarWithToggal = (n) => {
    let toPrint = "1 "

    for (let i = 0; i < n; i++){
        let p=""
        for (let j = 0; j <= i; j++){
            p = p + toPrint
            toPrint = toPrint == "1 "? "0 ": "1 "
        }
        console.log(p)
    } 
}
// printStarWithToggal(5)


const countDigit = (n) => {
    if(n < 1) return 0
    return 1+ countDigit(Math.floor(n/10))
}

// console.log(countDigit(.3))


const countDigitWithoutRecursion = (n) => {
    let d = 0
    while (n > 1) {
        n = n / 10
        d++
    }
    console.log(d, "-----")
}

countDigitWithoutRecursion(12222)





