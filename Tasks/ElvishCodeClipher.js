function decipherText(input) {
    const [encryptedMessage, numToSubtract] = input.split(',');
    
    if (encryptedMessage && encryptedMessage.length <= 100 && numToSubtract >= 1 && numToSubtract <= 25) {
        let result = '';
        for (let i = 0; i < encryptedMessage.length; i++) {
            const subtractedChar = encryptedMessage.charCodeAt(i) - parseInt(numToSubtract);
            result += String.fromCharCode(subtractedChar);
        }
        return result;
    }
    return null;
}

const input = "Uifsf!jt!b!tfdsfu,1";
const decryptedMessage = decipherText(input);
console.log(decryptedMessage); 