function getFirstLastOccurrence(inputList, searched) {
    const arrInput = inputList.split(",");
    let first = -1;
    let last = -1;
    let hasFirst = false;
    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i].trim() === searched) {
            if (first === -1) {
                first = i;
            } else {
                last = i;
            }
        }
    }
    if (first !== -1) {
        console.log("First Occurrence: " + first);
        console.log("Last Occurrence: " + (last !== -1 ? last : first));
    } else {
        console.log("Record not found");
    }
}

getFirstLastOccurrence("Frodo, Sam, Frodo, Merry", "Frodo");