// Comment: Form handling script
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        // Simulate form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // DOM manipulation for feedback
            messageDiv.textContent = 'Mesajınız başarıyla alındı! Teşekkürler.';
            messageDiv.style.color = 'green';

            // Clear form
            form.reset();
        } else {
            messageDiv.textContent = 'Lütfen tüm alanları doldurun.';
            messageDiv.style.color = 'red';
        }
    });
});
// Comment: End of script