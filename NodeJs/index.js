// Impotr core module
import os from 'os';
import calc from 'calculator'; // external dependancy/ vendor module

console.log("Hello Node.js app!");
// const calculator=import('./calculator'); //common js default import
// const {sum}= require('./calculator.js'); // destructor import



// console.log('Node App');


import calculator from './calculator.js';
console.log(calculator.sum(1,2));


console.log(`First line ${os.EOL} Second line`);
console.log('First line \n Second line');
// console.log(os.EOL.charCodeAt(0));
// console.log(os.EOL.charCodeAt(1));

const func =calc.func('f(x)= x*10');


console.log(func(10));

//********************** */
import fs from "fs";
import gzip from '';
const readStream=fs.createReadStream('.input.txt',
    {encodeing: 'utf8',
        highWaterMark:1000,
    });

readStream.on('data', (data)=>{
    console.log(
        '---------------- chunk------------------'
    );
});
readStream.on('end', ()=>{
    console.log(
       'Stream ended!!!'
    );
});
console.log(data);

const writeStream=fs.createWriteStream('./output.txt', {
    encoding:'utf8'
});
writeStream.write('dfghjkldfghjkldfghjk');
writeStream.write('dfghjkldfghjkldfghjk');
writeStream.write('dfghjkldfghjkldfghjk');
writeStream.end();

//combine

const readStream1=fs.createReadStream('.input.txt',
    {encodeing: 'utf8',
    
    });
    const writeStream1=fs.createWriteStream('./output.txt', {
        encoding:'utf8'
    });
    readStream1.on('data', (chunk)=>{
       writeStream1.writable(chunk)
    });
    readStream1.on('end', (chunk)=>{
        writeStream1.end();
     });
     const writeGzipStream=fs.createWriteStream('./output.txt', {
        encoding:'utf8'
    });
     const gzib=createGzip();
     readStream1.pipe(gzip).pipe(writeGzipStream)


