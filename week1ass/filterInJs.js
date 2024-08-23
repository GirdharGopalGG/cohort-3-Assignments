let array = [1,2,3,4,5,6,7,8,9]
// array.forEach(element => {
//     if(element%2==0){
//         console.log(element)
//     }
// });

const numbers = array.filter((n)=>{
    return n%2==0
})
console.log(numbers)