//Write a function that takes 3 parameters (name, surname and age) and returns an object.
let name="Penka";
let age=20;
let addres="Plovdiv";
let classSubj="IT";
function getPerson(name,age,addres,classSubj){
    let person={name,age,addres,classSubj};
    return person;

}
let firstPerson= getPerson(name,age,addres,classSubj);
 console.log(firstPerson);