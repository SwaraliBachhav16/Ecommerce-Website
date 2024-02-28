document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const SignupButton = document.getElementById('signin');
    const order=document.getElementById('order');
    
    SignupButton.addEventListener('click', function () {
        // Redirect to the signup page
        window.location.href = 'signin.html';
    });

    loginButton.addEventListener('click', function () {
    // Redirect to the login page
    window.location.href = 'login.html';
    });
});
const orderLink = document.getElementById("logoutlink");

 
orderLink.addEventListener("click", function(event) {
   
    event.preventDefault();

   
    window.location.href = 'index.html';
});

