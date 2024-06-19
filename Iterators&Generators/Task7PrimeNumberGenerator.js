

let numbers=[1,3,5,7,15,17,21,23];
function*testGener(){
    for (const elem of numbers) {
        let prime=true;
        for (let i=2;i<elem;i++){
            if(elem!=1 && elem%i==0){
                prime=false;
                break;
            }
        }
        if(elem!=1 && prime){
            yield elem;
        }
    }
}
let generator = testGener();
let nextElement = generator.next();

while (!nextElement.done) {
    console.log(nextElement.value);
    nextElement = generator.next();
}

