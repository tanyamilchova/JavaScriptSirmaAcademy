function checkPalindrome(arr) {
    for (let index = 0; index < arr.length; index++) {
       const element = arr[index];
        if(element>0){
            let rev=revertElement(element);
            if(rev!=element){
            console.log(false);
            }else{
                console.log(true);
            }

        }else{
            console.log("Negative element");
            continue;
        }
        
    }
   
}
function revertElement(el) {
    let revertedEl=0;
    
   while(el>0){
    let temp=el%10;
    revertedEl=revertedEl*10+temp;
    el=Math.trunc(el/10);
   }
   return revertedEl;
}
let array=[32,2,232,1010];
checkPalindrome(array);