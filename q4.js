const arr=[1,2,3,5,6,]
console.log(arr);
console.log(...arr);

function findMax(){
    return Math.max(...arr)
}
console.log(findMax());