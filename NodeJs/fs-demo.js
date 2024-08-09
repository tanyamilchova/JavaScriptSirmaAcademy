import fs from 'fs';
import fsPromises from 'fs/promises';

// Synchronnous reading slow- reads the whole file
const outputText=fs.readFileSync('./output.txt',{encoding: 'utf8'});
console.log(outputText);



// ASynchronnous faster
fs.readFile('./text.txt',{encoding: 'utf8'}, (err,data)=>{
    if(err){
        return err.message;
    }
    console.log(data);
});
console.log('End');

fsPromises.readFile('./text.txt',{encoding: 'utf8'})
.then(data=>{
    console.log(data);
});

