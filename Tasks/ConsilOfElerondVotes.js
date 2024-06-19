function getDecision(input) {
    if (checkInput(input)) {
        const votes = input.split(",");
        let countYes = 0;
        let countNo = 0;
        let hasAbstain = false;

        for (let i = 0; i < votes.length; i++) {
            const vote = votes[i].trim();
            if (vote === "Abstain") {
                hasAbstain = true;
            } else {
                if (vote === "Yes") {
                    countYes++;
                } else {
                    if (vote === "No") {
                        countNo++;
                    }
                }
            }
        }
        if (countYes > countNo) {
            return "Yes";
        } else {
            if (countYes === countNo) {
                if (countYes === 0 && hasAbstain) {
                    return "Abstain";
                } else {
                    return "Tie";
                }
            } else {
                return "No";
            }
        }
    }
    return null;
}

function checkInput(input) {
    if (!input || input.trim() === "") {
        return false;
    }
    const votes = input.split(",");
    for (let i = 0; i < votes.length; i++) {
        const vote = votes[i].trim();
        if (!(vote === "Yes" || vote === "No" || vote === "Abstain")) {
            return false;
        }
    }
    return true;
}

const voteResult = getDecision("Yes, No, Yes, Abstain, Yes");
console.log(voteResult);