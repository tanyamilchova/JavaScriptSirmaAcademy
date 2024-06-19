const phonebook={
    "Ivan":123,
    "Gosho":456,
    "Pesho":789
}
phonebook[Symbol.iterator]=function(){
    let names=Object.keys(this);
    let currIdx=0;
    let done=false;
    const iterator={
        next(){
            let result={
                value: names[currIdx++],
                done:names.length<currIdx
            }
            done=true;
            return result;
        }
    }
       return iterator; 
}
for (const entry of phonebook) {
    console.log(entry);
}
