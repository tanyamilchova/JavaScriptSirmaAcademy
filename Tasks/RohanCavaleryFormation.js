function cavalryFormation(arrString, commands) {
    const cavalry = convertToInteger(arrString);

    for (const command of commands) {
        const arrCommand = command.split(" ");
        const nameCommand = arrCommand[0].trim();
        let numToAct = "";
        let pos1 = 0;
        let pos2 = 0;

        if (arrCommand.length === 2) {
            numToAct = arrCommand[1].trim();
        }
        if (arrCommand.length === 3) {
            pos1 = parseInt(arrCommand[1].trim());
            pos2 = parseInt(arrCommand[2].trim());
        }

        switch (nameCommand) {
            case "destroy":
                destroy(numToAct, cavalry);
                break;
            case "swap":
                swap(pos1, pos2, cavalry);
                break;
            case "add":
                addElement(numToAct, cavalry);
                break;
            case "insert":
                insertElement(pos1, pos2, cavalry);
                break;
            case "center":
                center(cavalry);
                break;
            default:
                console.log("Wrong command");
        }
    }
}

function center(cavalryArray) {
    if (!cavalryArray || cavalryArray.length === 0) {
        return null;
    }
    const newFormation = [...cavalryArray];
    if (newFormation.length % 2 === 0) {
        console.log(newFormation[Math.floor(newFormation.length / 2) - 1]);
        console.log(newFormation[Math.floor(newFormation.length / 2)]);
    } else {
        console.log(newFormation[Math.floor(newFormation.length / 2)]);
    }
    return newFormation;
}

function insertElement(number, pos2, cavalryArray) {
    if (!cavalryArray || cavalryArray.length === 0 || pos2 < 0) {
        return null;
    }
    cavalryArray.splice(pos2, 0, number);
    printArray(cavalryArray);
    return cavalryArray;
}

function addElement(numToAct, cavalryArray) {
    if (!cavalryArray || cavalryArray.length === 0) {
        return null;
    }
    cavalryArray.push(parseInt(numToAct));
    printArray(cavalryArray);
    return cavalryArray;
}

function swap(pos1, pos2, cavalryArray) {
    if (!cavalryArray || cavalryArray.length === 0 || pos1 >= cavalryArray.length || pos2 >= cavalryArray.length || pos1 < 0 && pos2 < 0) {
        return null;
    }
    [cavalryArray[pos1], cavalryArray[pos2]] = [cavalryArray[pos2], cavalryArray[pos1]];
    printArray(cavalryArray);
    return cavalryArray;
}

function destroy(numToAct, cavalryArray) {
    if (!cavalryArray || cavalryArray.length === 0 || parseInt(numToAct) >= cavalryArray.length || parseInt(numToAct) < 0) {
        return null;
    }
    cavalryArray.splice(parseInt(numToAct), 1);
    printArray(cavalryArray);
    return cavalryArray;
}

function convertToInteger(cavalry) {
    if (!cavalry || cavalry.length === 0) {
        return null;
    }
    return cavalry.split(",").map(Number);
}

function printArray(list) {
    console.log(list.join(" "));
}

const arrString = "1, 2, 3, 4, 5";
const commands = ["destroy 3", "swap 0 1", "add 6", "center"];
cavalryFormation(arrString, commands);