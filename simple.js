let display = document.getElementById('display');

// Append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Add keyboard functionality
document.addEventListener('keydown', function(event) {
    // Numeric keys and operators
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

    if (validKeys.includes(event.key)) {
        if (event.key === 'Enter') {
            calculate(); // Trigger calculate when Enter is pressed
        } else if (event.key === 'Backspace') {
            display.value = display.value.slice(0, -1); // Remove the last character on Backspace
        } else {
            appendToDisplay(event.key); // Append the pressed key to the display
        }
    }
});
