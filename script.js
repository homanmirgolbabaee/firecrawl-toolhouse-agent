document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Add authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
});