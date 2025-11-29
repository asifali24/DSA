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

console.log(findSecLargest(arr))