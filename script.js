// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation and API call here
    console.log('Email:', email);
    console.log('Password:', password);
    // Example API call (pseudo-code)
    // authenticateUser(email, password);
});