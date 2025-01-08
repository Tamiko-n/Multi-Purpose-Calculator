function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date(document.getElementById('currentdate').value);

    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;

    // Show the result container
    document.getElementById('age-result').style.display = 'block';
}
