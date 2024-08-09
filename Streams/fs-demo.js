import fs from 'fs';
import fsPromises from 'fsPromises';
const outputText=fs.readFileSync('./text.txt',{encoding: 'utf8'});
console.log(outputText);

fs.readFile('./text.txt',{encoding: 'utf8'} (err,data)=>{
    if(err){
        return err.message;
    }
});


fs.readFile('./data,txt'), {encoding: 'utf8'}
.then(data=>{
    console.log(data);
})

const data={
name:'Pesho',
age:'32',
}