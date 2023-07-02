const display = document.getElementById('display');

let currentExpression = '';

function handleButtonClick(value) {
    if (value === '=') {
        try {
            const result = eval(currentExpression);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === 'C') {
        currentExpression = '';
        display.value = '';
    } else if (value === '%') {
        try {
            const result = eval(currentExpression) / 100;
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        currentExpression += value;
        display.value += value;
    }
}