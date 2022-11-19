function login(){
    let database = new localdb('database');
    let json = database.exportData('database');
    let data = JSON.parse(json);

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    const emailConfirm = data.rows[1].email; 
    const passwordConfirm = data.rows[1].password;

    if(email.value != emailConfirm || password.value != passwordConfirm){
        alert('The email or password are not right. Try again!');
        email.value = "";
        password.value = "";
    } else{
        alert('You has been logged.');
        window.location.href = '../../src/index.html'
    } 
}

let loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', login);