// Automatically set the current date in the currentdate input
document.addEventListener('DOMContentLoaded', () => {
    // Get the current date in the format YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Set the value of the current date input
    document.getElementById('currentdate').value = currentDate;
});

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentdate').value);

    const years = currentDate.getFullYear() - birthdate.getFullYear();
    const months = currentDate.getMonth() - birthdate.getMonth();
    const days = currentDate.getDate() - birthdate.getDate();

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;

    // Show the result container
    document.getElementById('age-result').style.display = 'block';
}
