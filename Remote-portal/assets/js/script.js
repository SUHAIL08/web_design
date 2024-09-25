document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = '';

    // Validate the form fields
    if (username === '') {
        errorMessage.textContent = 'Username is required.';
        document.getElementById('username').style.border = '2px solid red';
    } else if (password === '') {
        errorMessage.textContent = 'Password is required.';
        document.getElementById('password').style.border = '2px solid red';
    } else {
        // Reset border if valid
        document.getElementById('username').style.border = '';
        document.getElementById('password').style.border = '';

        // Simulate a successful login
        alert('Login successful!');
        // Reset form
        document.getElementById('loginForm').reset();
    }
});
