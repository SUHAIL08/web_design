document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const facultyName = document.getElementById('faculty-name').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (facultyName === '' || username === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Store the faculty name and username in localStorage
    localStorage.setItem('facultyName', facultyName);
    localStorage.setItem('username', username);
    
    // Redirect to the faculty page (assuming login is successful)
    window.location.href = 'faculty.html';
});
