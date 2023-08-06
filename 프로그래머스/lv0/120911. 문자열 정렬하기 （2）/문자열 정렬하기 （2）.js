function solution(my_string) {
  let a = my_string.toLowerCase();
  return a.split("").sort().join('');
}