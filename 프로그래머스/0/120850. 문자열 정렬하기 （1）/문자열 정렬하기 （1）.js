function solution(my_string) {
    let arr = [...my_string];               
    arr = arr.filter(item => !isNaN(item)); 
    arr = arr.map(Number);                 
    return arr.sort((a, b) => a - b);        
}