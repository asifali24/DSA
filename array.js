// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(n) {
    let s =0
    for(let i=1 ;i <=n.length-1; i++){
        if(n[s] != n[i]){
            s++
            n[s]=n[i]
        }
    }
    return s+1
};



// 27. Remove Element


var removeElement = function(n, v) {
    let s =0
    for(let i=0; i< n.length; i++){
        if(n[i] != v){
            n[s]=n[i]
            s++
        }
    }
    return s
};

// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let sl=0
    let f=s.length-1

    while(sl < f){
        let temp = s[sl]
        s[sl]=s[f]
        s[f]=temp
        sl++
        f--
    }
};


// 121. Best Time to Buy and Sell Stock

var maxProfit = function(p) {
    let pro =0
    let b = Infinity

    for(let i=0; i<p.length; i++){
        if(b > p[i]){
            b = p[i]
         }else{
            if((p[i]-b) > pro){
                pro = p[i]-b
            }
        }
    }
    return pro
};


// 283. Move Zeroes

var moveZeroes = function(n) {
    let p1=0
    for(let i=0;i <n.length; i++){
        if(n[i] !==0){
            n[p1]=n[i]
            p1++
        }
    }

    for(let i=p1; i<n.length;i++){
        n[i]=0
    }
};


// 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function(n) {
    maxC = 0
    cc = 0
    for(let i=0 ;i< n.length; i++){
        if(n[i] ===1){
            cc++
        }else{
            maxC = cc > maxC ? cc: maxC
            cc=0
        }
    }
    return cc > maxC ? cc: maxC
    
};



// 268. Missing Number

var missingNumber = function(nums) {
    let n =nums.length
    let t= (n *(n+1))/2
    let ct = 0
    nums.forEach((e)=> ct+=e)
    return t-ct
};


