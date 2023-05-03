// function solution(num_list, n) {
//    for(let i = 0; i< num_list.length; i++){
//        if(num_list[i] === n){
//            return 1
//        } else {return 0}
//    }
// }
const solution = (num_list, n) => num_list.some(a => a === n) ? 1 : 0