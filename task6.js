const maximum=(array1,array2)=>{
    let newArray=[...array1,...array2]
    return Math.max(...newArray)
}
console.log(maximum([1,2],[5,6]))