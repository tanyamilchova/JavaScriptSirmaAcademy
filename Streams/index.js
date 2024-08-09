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