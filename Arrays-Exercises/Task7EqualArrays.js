let array1=[ "10","20","30"];
let array2=[ "10","20","0"];
let sum=0;
let indentical=true;

if(array1.length<array2.length){
    let temp=array1;
    array1=array2;
    array2=temp;
}
if(array1.length!==array2.length){
    console.log("Arrays are not identical.Found difference in length.");
}else{
        for (let index = 0; index < array1.length; index++) {
            if(array1[index]!==array2[index]){
            console.log("Arrays are not identical.Found difference at "+index+" index");
            indentical=false;
            break;
            }else{
            let intValue=parseInt(array1[index]);
            sum+=intValue;
            }
            
        }
        if(indentical){
        console.log("Arrays are identical. Sum: "+sum);
        }
    }

