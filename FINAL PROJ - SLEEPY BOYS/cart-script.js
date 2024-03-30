// JavaScript to handle the toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const paymentTab = document.getElementById('floating-payment-tab');
    const openPaymentBtn = document.getElementById('open-payment-tab');
    const paymentContent = document.getElementById('payment-content');

    openPaymentBtn.addEventListener('click', function() {
        paymentContent.style.display = paymentContent.style.display === 'block' ? 'none' : 'block';
    });
});
