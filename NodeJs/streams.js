import fs from 'fs';
import { createGzip } from 'zlib';

// import fsPromises from 'fsPromises';
// create Read Stream
const readStream=fs.createReadStream('./input.txt',{ encoding:'utf8', highWaterMark:1000} );
readStream.on('data',(data)=>{
    console.log('----------Chunk-------------');
    console.log(data);
});

readStream.on('end', ()=>{
    console.log('Stream ended!!!');
});

const writeStream=fs.createWriteStream('./output.txt', {encoding:'utf8'});

writeStream.write('DFGHJKLDFGHJK\n');
writeStream.write('DFGHJKLDFGHJK\n');
writeStream.write('DFGHJKLDFGHJK\n');
writeStream.write('DFGHJKLDFGHJK\n');
writeStream.write('DFGHJKLDFGHJK\n');

writeStream.end();


//-----------------------------------------------------

const readInfputStream=fs.createReadStream('./input.txt',{ encoding:'utf8'} );
const writeOutputStream=fs.createWriteStream('./output2.txt', {encoding:'utf8'});

readInfputStream.on('data', (chunk)=>{
    writeOutputStream.write(chunk);

});
readInfputStream.on('end', ()=>{
    writeOutputStream.end();
    
});
// the same is:  --------- pipe streams:
readInfputStream.pipe(writeOutputStream);
//-----------------------------------------------------------
const gzip=createGzip();
const writeGzipOutputStream=fs.createWriteStream('./output.gzip.txt', {encoding:'utf8'});
// четем,         трансфармираме,  архивираме
readInfputStream.pipe(gzip).pipe(writeGzipOutputStream);


// const outputText=fs.readFileSync('./text.txt',{encoding: 'utf8'});
// console.log(outputText);

// fs.readFile('./text.txt',{encoding: 'utf8'} (err,data)=>{
//     if(err){
//         return err.message;
//     }
// });


// fs.readFile('./data,txt'), {encoding: 'utf8'}
// .then(data=>{
//     console.log(data);
// })

// const data={
// name:'Pesho',
// age:'32',
// }