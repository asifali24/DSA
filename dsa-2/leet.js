var merge = function(n1, m, n2, n) {
    if (n < 1) return n1    
    //bruteforcce approch
    let ind = m
    let tem =0

    while(ind< n1.length){
        n1[ind] =n2[tem]
        tem++
        ind++
    }
    n1.sort((a, b) => a - b)
    
    return n1
    
};

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))






// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(n1, m, n2, n) {
    if (n < 1) return n1
    // if (m < 1) return n1=[...n2] 

    // bruteforcce approch

    // let ind = m
    // let tem =0

    // while(ind< n1.length){
    //     n1[ind] =n2[tem]
    //     tem++
    //     ind++
    // }
    // n1.sort((a, b) => a - b)

    // Google SDE like sol


//  Approch 1.1

// let p=0
// let n1c= [...n1.slice(0,m)]

// while(p < m){
//     if(n1c[p] > n2[0] ){
//         let t = n1c[p]
//         n1c[p]  = n2[0]
//         n2[0]=t
//         n2.sort((a,b)=> a-b)
//     }
//     p++
// }
// let t = [...n1c, ...n2]

// for(let i=0; i< t.length;i++){
//     n1[i]=t[i]
// }


//Aprroch 1.2
    
    // let n1c= [...n1.slice(0,m)]
    // let p1=0
    // let p2=0
    // for(let i=0 ;i< m+n ;i++){
    //     if(p1 < m && p2 < n){
    //         if(n1c[p1] < n2[p2]){
    //             n1[i] = n1c[p1]
    //             p1++
    //         }else{
    //             n1[i] = n2[p2]
    //             p2++
    //         }
    //     }else if(p1 ==m){
    //         n1[i] = n2[p2]
    //         p2++
    //     }else{
    //         n1[i] = n1c[p1]
    //         p1++
    //     }
    // }


    //approch 1.3
    let ind = n1.length -1
    let p1 = m-1
    let p2 = n-1
    // n1,n2

    for(let i=0 ;i< n1.length; i++){
        if(p1 >=0 && p2>=0){
            if(n1[p1] > n2[p2]){
                n1[ind] = n1[p1]
                p1--
            }else{
                n1[ind] = n2[p2]
                p2--
            }
        }else if(p1 ==-1){
            n1[ind]= n2[p2]
            p2--
        }else{
            n1[ind] = n1[p1]
            p1--
        }
        ind--
    }


    return n1
    
};