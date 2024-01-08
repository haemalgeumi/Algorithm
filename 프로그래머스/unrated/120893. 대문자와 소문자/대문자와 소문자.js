function solution(my_string) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            arr.push(my_string[i].toLowerCase())
        } else {
            arr.push(my_string[i].toUpperCase())
        }
    } return arr.join('')
}
//문자열을 하나하나 살펴본다 for문
//대문자면 소문자, 소무자면 대문자로 바꾼다. if문
//배열을 푼다.