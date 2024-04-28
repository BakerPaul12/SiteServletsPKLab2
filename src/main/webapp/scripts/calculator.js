document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultsBody = document.getElementById('results-body');
    const clearButton = document.getElementById('clear-results');

    const inputs = {
        addition: document.getElementById('addition-inputs'),
        division: document.getElementById('division-inputs'),
        quadratic: document.getElementById('quadratic-inputs')
    };

    let idCounter = 1; 

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const operation = document.querySelector('input[name="operation"]:checked').value;
        let result, equation;
    
        switch(operation) {
            case 'addition':
                const addInput1 = parseFloat(document.getElementById('add-input1').value);
                const addInput2 = parseFloat(document.getElementById('add-input2').value);
                if (!isNaN(addInput1) && !isNaN(addInput2)) {
                    result = addInput1 + addInput2;
                    equation = `${addInput1} + ${addInput2}`;
                } else {
                    equation = `${addInput1} + ${addInput2}`;
                    result = "ERROR (invalid inputs)";
                }
                break;
            case 'division':
                const dividend = parseFloat(document.getElementById('dividend').value);
                const divisor = parseFloat(document.getElementById('divisor').value);
                if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
                    result = dividend / divisor;
                    equation = `${dividend} / ${divisor}`;
                } else {
                    equation = `${dividend} / ${divisor}`;
                    result = "ERROR (b=0 or invalid inputs) ";
                }
                break;
            case 'quadratic':
                const a = parseFloat(document.getElementById('quad-a').value);
                const b = parseFloat(document.getElementById('quad-b').value);
                const c = parseFloat(document.getElementById('quad-c').value);
                if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0) {
                    const delta = b * b - 4 * a * c;
                    if (delta > 0) {
                        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
                        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
                        result = `${root1} | ${root2}`;
                        equation = `${a}x^2 + ${b}x + ${c} = 0`;
                    } else if (delta === 0) {
                        const root = -b / (2 * a);
                        result = `${root}`;
                        equation = `${a}x^2 + ${b}x + ${c} = 0`;
                    } else {
                        result = "ERROR (delta<0)";
                        equation = `${a}x^2 + ${b}x + ${c} = 0`;
                    }
                } else {
                    equation = `${a}x^2 + ${b}x + ${c} = 0`;
                    result = "ERROR (a=0 or invalid inputs)";
                }
                break;
            default:
                result = "Invalid operation";
        }
    
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${idCounter++}</td><td>${equation}</td><td>${result}</td>`;
        resultsBody.appendChild(newRow);
    });
    

    clearButton.addEventListener('click', function() {
        resultsBody.innerHTML = '';
        idCounter = 1; // Resetowanie licznika id po wyczyszczeniu
    });

    form.addEventListener('input', function(event) {
        if (event.target.name === 'operation') {
            const selectedOperation = event.target.value;
            for (let key in inputs) {
                inputs[key].style.display = 'none';
            }
            inputs[selectedOperation].style.display = 'block';
        }
    });

    form.dispatchEvent(new Event('input')); // Wywołanie zdarzenia input na starcie dla domyślnej operacji
});
