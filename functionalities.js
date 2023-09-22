const regButton = document.getElementById('register').addEventListener('click', openPage);;
const loginButton = document.getElementById('login').addEventListener('click', enter);


function openPage(){
    window.open('register-form.html', 'width=40%', 'heigth=40%');
}

function enter(){
    window.open('login-form.html', 'width=40%', 'heigth = 40%');
}

