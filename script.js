document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') { 
                currentInput += value;
                display.value = currentInput;
            } else if (value === 'C') { 
                clear();
            } else if (value === '=') { 
                calculate();
            } else { 
                if (currentInput !== '') {
                    currentInput += value;
                    display.value = currentInput;
                }
            }
        });
    });

    function clear() {
        currentInput = '';
        display.value = '';
    }

    function calculate() {
        try {
            const result = eval(currentInput);
            display.value = result;
            currentInput = result.toString();
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    }
});
