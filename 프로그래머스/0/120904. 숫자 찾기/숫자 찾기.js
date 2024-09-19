function solution(num, k) {
     let arr = [...String(num)];
   if( arr.indexOf(String(k)) > -1){
       return arr.indexOf(String(k)) +1;
   } else{
       return -1;
   }
}