const userInput = prompt('Введіть числа через кому:');

if (userInput === null) {
    alert('Програма завершилась.');
} else {
    const inputArray = userInput.split(',').map(Number).filter(number => !isNaN(number) && number !== 0);

    if (inputArray.length === 0) {
        alert('Введено некоректні або нульові числа.');
    } else {
        const sum = inputArray.reduce((acc, curr) => acc + curr, 0);
        alert(`Сума введених чисел:  ${sum} `);
    }
}

