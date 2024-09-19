<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Marcas</title>
    <script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"></script>
</head>
<body>
    <h1>Calculadora</h1>
    
    <label for="brand">Marca:</label>
    <select id="brand">
        <option value="marca1">Marca 1</option>
        <option value="marca2">Marca 2</option>
        <option value="marca3">Marca 3</option>
    </select>

    <br>

    <label for="inputValue">Valor:</label>
    <input type="text" id="inputValue">

    <br>

    <button onclick="calculate()">Calcular</button>

    <h3>Resultado: <span id="result"></span></h3>

    <h3>Historial de Operaciones:</h3>
    <table id="historyTable" border="1">
        <thead>
            <tr>
                <th>Marca</th>
                <th>Valor Inicial</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <br>
    <button onclick="downloadExcel()">Descargar Excel</button>

    <script>
        let history = [];

        function calculate() {
            const brand = document.getElementById('brand').value;
            const inputValue = parseFloat(document.getElementById('inputValue').value);
            let result;

            if (isNaN(inputValue)) {
                alert('Por favor, ingresa un número válido.');
                return;
            }

            switch (brand) {
                case 'marca1':
                    result = inputValue * 1.21 * 2;
                    break;
                case 'marca2':
                    result = inputValue * 1.21 * 2;
                    break;
                case 'marca3':
                    result = inputValue * 1.21 * 2;
                    break;
                default:
                    result = inputValue * 1.21 * 2;
            }

            // Mostrar el resultado en la página
            document.getElementById('result').textContent = result.toFixed(2);

            // Agregar la operación al historial
            const operation = {
                brand: brand,
                inputValue: inputValue,
                result: result.toFixed(2)
            };

            history.push(operation);

            // Mostrar el historial en la tabla
            addToHistoryTable(operation);
        }

        function addToHistoryTable(operation) {
            const tableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
            const newRow = tableBody.insertRow();

            const cellBrand = newRow.insertCell(0);
            const cellInputValue = newRow.insertCell(1);
            const cellResult = newRow.insertCell(2);

            cellBrand.textContent = operation.brand;
            cellInputValue.textContent = operation.inputValue;
            cellResult.textContent = operation.result;
        }

        function downloadExcel() {
            const worksheetData = [['Marca', 'Valor Inicial', 'Resultado']];
            history.forEach(operation => {
                worksheetData.push([operation.brand, operation.inputValue, operation.result]);
            });

            const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Historial');

            XLSX.writeFile(workbook, 'historial_operaciones.xlsx');
        }
    </script>
</body>
</html>