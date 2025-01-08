// Automatically set the current date in the currentdate input
document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('currentdate').value = currentDate;
});

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentdate').value);

    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();

    // Adjust days if negative
    if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Display the result
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;

    // Show the result container
    document.getElementById('age-result').style.display = 'block';
}
