document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Dummy email and password
    var dummyEmail = 'example@example.com';
    var dummyPassword = 'password123';

    // Retrieve the entered email and password
    var email = document.getElementById('mailId').value;
    var password = document.getElementById('password').value;

    // Check if email and password match the dummy credentials
    if (email === dummyEmail && password === dummyPassword) {
        // Redirect to home.html upon successful login
        window.location.href = '\Home.html';
    } else {
        alert('Incorrect email or password');
    }
});