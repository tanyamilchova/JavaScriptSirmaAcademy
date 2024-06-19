let string="Hello how are you today? I hope you are fine";
let arrString=string.split(" ");
console.log(arrString);
function getShortestLongestWord(arrString){
    let max=arrString[0];
    let min=arrString[0];
    for (let index = 0; index < arrString.length; index++) {
        const word = arrString[index].trim();
        if(max.length<word.length){
            max=word;
        }
        if(min.length>word.length){
            min=word;
        }
    }
    console.log(min);
    console.log(max);
}
getShortestLongestWord(arrString);
function isLetter(char){
    let code=char.charCodeAt(0);
    return (code>=65 && code<=90) || (code>=97 && code<=127);
}