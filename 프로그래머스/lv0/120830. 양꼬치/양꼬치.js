function solution(n, k) {
return (12000*n) + ((k*2000) - (Math.trunc(n/10)*2000));
}
//10인분당 음료수 한 개
// 나머지는 (12000*n) + (k*2000 - Math.trunc(n%10)*2000)
// return (12000*n) + ((k*2000) - (Math.trunc(n%10)*2000));