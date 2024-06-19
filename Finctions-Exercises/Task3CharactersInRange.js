function printCharacters(start,end){
   console.log(startCharcode);
   console.log(endCharcode);

    for (let index = startCharcode+1; index < endCharcode; index++) {
        console.log( String.fromCharCode(index));
        
    }
}printCharacters('a','d');