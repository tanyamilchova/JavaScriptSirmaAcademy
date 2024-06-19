let name="Ivan";
let surName="Ivanov";
let eyeColor="black";
function convertToJSON(name,surName,eyeColor){
    let person={name,surName,eyeColor};
    return JSON.stringify(person);
}
console.log(convertToJSON(navigator,surName,eyeColor));