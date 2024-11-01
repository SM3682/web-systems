function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById('totalAmount').textContent = 'Please enter valid numbers for both fields.';
        return;
    }
    const totalAmount = subtotal + (subtotal * (tipPercentage / 100));
    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
