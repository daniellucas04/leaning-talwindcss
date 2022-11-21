const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');

function redirectLoginPage() {
    location.href = '../src/pages/login.html';
}

function redirectSignupPage() {
    location.href = '../src/pages/signup.html';
}

btnLogin.addEventListener('click', redirectLoginPage);
btnSignup.addEventListener('click', redirectSignupPage);

const card = document.getElementById('card');

function openCard(){
    let imageCard = document.getElementById('image-card');
    let h1Card = document.getElementById('h1-card');
    let pCard = document.getElementById('p-card');
    let cardBackground = document.getElementById('card-background');

    imageCard.classList.toggle('animation-card-img');
    h1Card.classList.toggle('animation-card-h1');
    pCard.classList.toggle('animation-card-p');
    cardBackground.classList.toggle('animation-card-size');
}

card.addEventListener('click', openCard)