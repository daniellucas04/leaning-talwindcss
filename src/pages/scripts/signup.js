function createDatabase(){
    let database = new localdb('database');
    database.createTable('signup');
}

function saveData(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    if(password != confirmPassword) return alert('The passwords must be equal');

    if(!username || !email || !password || !confirmPassword) return alert('Complete all fields to complete the sign up.');

    let database = new localdb('database');
    let databaseExists = database.dbExists('database');
    let tableExists = database.dbExists('signup');

    if(databaseExists == true || tableExists == true){
        database.insert('database', {'username': username, 'email': email, 'password': password});
        alert('You have been successfully registered.');
        window.location.href = "../../src/pages/login.html";
    } else return console.log('Database our Table not created');
}

window.onload = createDatabase;

let signUpButton = document.getElementById('signUpButton');

signUpButton.addEventListener('click', saveData);

