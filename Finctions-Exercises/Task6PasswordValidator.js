let pass="passaa*";
function validatePassword(pass) {
    let countDigit=0;
    if(pass.length<6 || pass.length>10){
        console.log("Password must be between 6 and 10 characters");
        return;
    }

    for (let index = 0; index < pass.length; index++) {
        const element = pass[index];
        if(isDigit(element)){
            countDigit++;
        }else{
            if(! isLetter(element)){
                console.log("Password must consist only of letters and digits");
                return;
            }
            }
        }
        if(countDigit<2){
            console.log("Password must have at least 2 digits");
            return;
        }
    
}

function isLetter(char){
     let code=char.charCodeAt(0);
     return (code>=65 && code<=90) || (code>=97 && code<=127);
}
function isDigit(char){
    let code=char.charCodeAt(0);
    return (code>=48 && code<=57);
}

console.log( validatePassword(pass));