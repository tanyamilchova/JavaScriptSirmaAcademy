//You will receive a single number between 0 and 100 which is divided with 10 without
// residue (0, 10, 20, 30...).
// Your task is to create a JS function that visualize a loading bar depending on that
// number you have received in the input. See examples for more clarity.
// Examples
// Input Output
// 30 30% [%%%.......]
// Loading...
let number=60;
let temp=number;
let arrLoading=[];
function loadingBar(temp){
    while(temp>0){
        temp-=10;
        arrLoading.push('%');
    }
    console.log(arrLoading);
    if(arrLoading.length==100){
        console.log("Compleated");
    }else{
        console.log("Loading...");
    }
}
loadingBar(number);