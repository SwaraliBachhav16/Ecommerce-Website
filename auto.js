function showAlert() {
    var orderType = document.querySelector('input[name="orderType"]:checked');
    if (orderType) {
        alert("Payment successful....your order is confirmed");
    } else {
        alert("Please payment method");
    }
}