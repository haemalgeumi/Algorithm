function solution(numbers) {
    let answer = 0;
    for(let i = 0; i <numbers.length; i++){
        answer = answer + numbers[i]
    }
    return answer / numbers.length;

}
//각 요소를 다 돌면서 폴문
//차례대로 더한 다음 
//갯수만큼 나눈다 numbers.length