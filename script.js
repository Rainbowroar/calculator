document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentExpression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === '=') {
                try {
                    const result = new Function('return ' + currentExpression.replace(/÷/g, '/').replace(/×/g, '*'))();
                    display.value = parseFloat(result.toFixed(10)); // Display the result
                    currentExpression = display.value; // Prepare for new entry
                } catch {
                    display.value = '0'; // Reset on error
                    currentExpression = '';
                }
            } else {
                currentExpression += value;
                display.value = currentExpression;
            }
        });
    });
});
