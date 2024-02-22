const arrayOfSumOfAverage=(myArray)=>{
    let sum=0
    for(let number of myArray){
        let square=number**2
        sum+=square
        // console.log(sum)
    }
    return sum/myArray.length
}
console.log(arrayOfSumOfAverage([1, 2, 3, 4, 5]));