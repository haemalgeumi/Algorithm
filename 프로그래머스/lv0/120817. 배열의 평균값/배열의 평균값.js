// function solution(numbers) {
//     let answer = 0;
//     for(let i = 0; i <numbers.length; i++){
//         answer = answer + numbers[i]
//     }
//     return answer / numbers.length;

// }
function solution(numbers) {
   return numbers.reduce((acc,cur)=>acc+cur) / numbers.length;
}

