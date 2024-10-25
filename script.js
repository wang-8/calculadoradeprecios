function calculate() {
    const brand = document.getElementById('brand').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    switch (brand) {
        case 'General':
            result = inputValue * 1.21 * 2 +500;
            break;
        case 'Fashion/bathbazar/':
            result = inputValue * 1.26 * 2 +500;
            break;
        case 'marca3':
            result = inputValue * 1.21 * 2;
            break;
        default:
            result = inputValue * 1.21 * 2;
    }

    document.getElementById('result').textContent = result.toFixed(2);
}
