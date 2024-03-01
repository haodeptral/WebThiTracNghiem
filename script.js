let loginButton = document.getElementById('loginButton');
let registerButton = document.getElementById('registerButton');

loginButton.addEventListener('click', function() {
    window.location.href = './login.html';
})
registerButton.addEventListener('click', function() {
    window.location.href = './register.html';
})