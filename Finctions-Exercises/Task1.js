function getTheSmalest(num1,num2,num3){
    let min=0;
    if(num1>num2){
        min=num2;
    }else{
        min=num1;
    }
    if(num1>num3){
        min=num3;
    }
    return min;
}
console.log(getTheSmalest(3,8,-9));