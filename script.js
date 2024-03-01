let loginToRegister = document.querySelector('.login-register');
let registerToLogin = document.querySelector('.register-login');
let registerForm = document.querySelector('.register');
let loginForm = document.querySelector('.login');

loginToRegister.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.add('active');
})

registerToLogin.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
})