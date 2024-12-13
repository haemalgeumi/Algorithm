function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a,b) => b-a);
    return emergency.map((patient)=>sortedEmergency.indexOf(patient)+1);
    
}
