function isLegendary(strikes) {
    let isBalanced = true;
    const stringsDeque = [];
    let hasExclMark = false;
    for (let i = 0; i < strikes.length; i++) {
        if (strikes.charAt(i) === '!') {
            if (!hasExclMark) {
                stringsDeque.push(strikes.charAt(i));
                hasExclMark = true;
            } else {
                if (stringsDeque.length === 0 || stringsDeque.pop() !== '!') {
                    isBalanced = false;
                    break;
                }
                hasExclMark = false;
            }
        } else if (strikes.charAt(i) === '(' || strikes.charAt(i) === '{') {
            stringsDeque.push(strikes.charAt(i));
        } else if (strikes.charAt(i) === ')' || strikes.charAt(i) === '}') {
            if (stringsDeque.length === 0) {
                isBalanced = false;
                break;
            }
            const lastChar = stringsDeque.pop();
            if (!((strikes.charAt(i) === ')' && lastChar === '(') || (strikes.charAt(i) === '}' && lastChar === '{'))) {
                isBalanced = false;
                break;
            }
        }
    }
    if (stringsDeque.length !== 0) {
        isBalanced = false;
    }
    return isBalanced ? "Legendary" : "Not Legendary";
}

const strikes = "((!!)(({!!})))";
console.log(isLegendary(strikes));