// Write a function that accepts an array of names and phone numbers. Write down all the
// names in the phone book. If you get an existing name, replace the number with the new
// one.

let inputArr = ["Peter 0888657212", "Bob 0899657212", "Peter 123123"];
let phonebook = [];
function isNameInPhonebook(phonebook, name) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === name) {
            return true; 
        }
    }
    return false; 
}
function changeATheOhoneNum(phonebook, name,newNumber) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === name) {
            phonebook[i].phoneNumber=newNumber;
           }
    }   
}

for (let i = 0; i < inputArr.length; i++) {
    let splitedData = inputArr[i].split(" ");
    let name = splitedData[0];
    let phoneNumber = splitedData[1];
    let person = { name, phoneNumber };
    
    if (!isNameInPhonebook(phonebook, name)) {
        let person = { name, phoneNumber };
        phonebook.push(person);
    } else {
        changeATheOhoneNum(phonebook,name,phoneNumber);
    }
}

console.log(phonebook);