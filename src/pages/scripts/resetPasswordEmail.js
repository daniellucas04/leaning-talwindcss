//send Email to reset password
const userEmail = document.getElementById('email');
const submit = document.getElementsByClassName('flex')[0];

function verifyEmail(email){
    let database = new localdb('database');
    let json = database.exportData('database');
    let data = JSON.parse(json);
    let cont = parseInt(data.totalrows);

    for(let i=1; i<=cont; i++){
        if(email === data.rows[i].email){
            return true;
        } else if(email !== data.rows[i].email){
            return false;
        } 
    }
}

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const rightEmail = verifyEmail(userEmail.value);
    console.log(userEmail.value);

    if(rightEmail == true){
        Email.send({
            SecureToken: "c97614f3-212e-4e92-89ac-c6055379c75c",
            To: `${email.value}`,
            From: "dlterrorost@gmail.com",
            Subject: "Password Reset",
            Body: "Reset your password"
        }).then(message => alert(message));
    }else if(rightEmail == false || userEmail.value === ''){
        alert("Please inform a valid email.");
    }
});