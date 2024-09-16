function solution(order) {
    let a = [...String(order)]; 
    let b = 0; 

    for(let i = 0; i < a.length; i++) {
    
        if (a[i] === '3' || a[i] === '6' || a[i] === '9') {
            b++;
        }
    }

    return b; 
}

// console.log(solution(29423)); 
