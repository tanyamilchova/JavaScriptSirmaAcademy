function countOrcs(initialOrcs, increase, hours) {
    if (initialOrcs < 0 || hours < 0) {
        return 0;
    }
    return hours * initialOrcs + (hours * (hours - 1) * increase) / 2;
}



const result = countOrcs(5, 2, 3);
console.log(result);