function calculateTax() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;

    const taxableIncome = Math.max(0, income - deductions);
    const taxAmount = (taxableIncome * taxRate) / 100;
    const netIncome = income - taxAmount;

    document.getElementById('taxable-income').textContent = taxableIncome.toFixed(2);
    document.getElementById('tax-amount').textContent = taxAmount.toFixed(2);
    document.getElementById('net-income').textContent = netIncome.toFixed(2);
}