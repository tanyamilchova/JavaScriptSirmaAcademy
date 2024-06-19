function carCompanyRegister(input) {
    let register = {};

    input.forEach(entry => {
        let [brand, model, producedCars] = entry.split(' | ');
        producedCars = Number(producedCars);

        if (!register[brand]) {
            register[brand] = {};
        }
        
        if (!register[brand][model]) {
            register[brand][model] = 0;
        }

        register[brand][model] += producedCars;
    });

    let output = '';
    for (let brand in register) {
        output += `${brand}\n`;
        for (let model in register[brand]) {
            output += `###${model} -> ${register[brand][model]}\n`;
        }
    }

    return output;
}

let input = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
];

console.log(carCompanyRegister(input));
