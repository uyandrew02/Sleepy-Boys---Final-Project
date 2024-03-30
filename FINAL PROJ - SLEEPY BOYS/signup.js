document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById('signUpForm');
    const playerIDInput = signUpForm.querySelector('input[name="playerID"]');

    // Function to generate a random player ID
    function generatePlayerID() {
        const segments = [];
        for (let i = 0; i < 3; i++) {
            segments.push(Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
        }
        return segments.join(' ');
    }

    // Automatically fill the player ID field with a generated ID
    playerIDInput.value = generatePlayerID();

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
        const confirmPassword = signUpForm.querySelector('input[name="confirmPassword"]').value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Normally, you would send data to the server here
        // Simulate a successful sign up with a timeout
        setTimeout(() => {
            alert('Sign up successful! Redirecting to home page.');

            // Redirect to index2.html
            window.location.href = 'index2.html';
        }, 1000); // Simulated async operation (e.g., network request)
    });
});
