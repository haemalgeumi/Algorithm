function solution(n, numlist) {
    let answer = [];
    for(let i = 0; i < numlist.length; i++){
        if(numlist[i] % n === 0){
            answer.push(numlist[i]);
        }
    } return answer;
}
//numlist 에서 숫자 하나하나 꺼낸다음,for
//3으로 나눴을 때 0이면
// 그것들만 배열에 뽑아서 넣는다.