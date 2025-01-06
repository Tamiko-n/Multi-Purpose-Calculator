let scientificDisplay = document.getElementById('scientific-display');

// Append value to the scientific display
function appendToScientific(value) {
    scientificDisplay.value += value;
}

// Clear the scientific display
function clearScientific() {
    scientificDisplay.value = '';
}

// Calculate the expression
function calculateScientific() {
    try {
        scientificDisplay.value = eval(scientificDisplay.value);
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate square root
function calculateSquareRoot() {
    try {
        scientificDisplay.value = Math.sqrt(eval(scientificDisplay.value));
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate power (squared)
function calculatePower() {
    try {
        scientificDisplay.value = Math.pow(eval(scientificDisplay.value), 2);
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate sine (in degrees)
function calculateSin() {
    try {
        scientificDisplay.value = Math.sin(eval(scientificDisplay.value) * Math.PI / 180);
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate cosine (in degrees)
function calculateCos() {
    try {
        scientificDisplay.value = Math.cos(eval(scientificDisplay.value) * Math.PI / 180);
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate tangent (in degrees)
function calculateTan() {
    try {
        scientificDisplay.value = Math.tan(eval(scientificDisplay.value) * Math.PI / 180);
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate log base 10
function calculateLog() {
    try {
        scientificDisplay.value = Math.log10(eval(scientificDisplay.value));
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Calculate natural log (ln)
function calculateLn() {
    try {
        scientificDisplay.value = Math.log(eval(scientificDisplay.value));
    } catch (error) {
        scientificDisplay.value = 'Error';
    }
}

// Append Pi to display
function calculatePi() {
    scientificDisplay.value += Math.PI;
}

// Keyboard input functionality
document.addEventListener('keydown', function(event) {
    // Numeric keys and operators
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 's', 'c', 't', 'l', 'p'];

    if (validKeys.includes(event.key)) {
        if (event.key === 'Enter') {
            calculateScientific(); // Trigger calculate when Enter is pressed
        } else if (event.key === 'Backspace') {
            scientificDisplay.value = scientificDisplay.value.slice(0, -1); // Remove the last character on Backspace
        } else if (event.key === 's') {
            calculateSin(); // Trigger sin when 's' is pressed
        } else if (event.key === 'c') {
            calculateCos(); // Trigger cos when 'c' is pressed
        } else if (event.key === 't') {
            calculateTan(); // Trigger tan when 't' is pressed
        } else if (event.key === 'l') {
            calculateLog(); // Trigger log when 'l' is pressed
        } else if (event.key === 'p') {
            calculatePi(); // Trigger Pi when 'p' is pressed
        } else {
            appendToScientific(event.key); // Append the pressed key to the display
        }
    }
});
