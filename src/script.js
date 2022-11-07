const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');

function redirectLoginPage(){
    location.href = '../src/pages/login.html';
}

function redirectSignupPage(){
    location.href = '../src/pages/signup.html';
}

btnLogin.addEventListener('click', redirectLoginPage);
btnSignup.addEventListener('click', redirectSignupPage);