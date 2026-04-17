const form = document.querySelector('form');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const mensagem = document.querySelector(".mensagem");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(email.value === 'admin@email.com' && senha.value === '1234') {
        alert('Login bem-sucedido!');
    } else {
        alert('Email ou Senha Incorretos!');
    }
})