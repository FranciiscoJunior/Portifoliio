let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});

/*document.getElementById('btn-menu').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.add('active');
    document.getElementById('overlay-menu').classList.add('active');
});

document.getElementById('btn-close-menu').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.remove('active');
    document.getElementById('overlay-menu').classList.remove('active');
});

document.getElementById('overlay-menu').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.remove('active');
    document.getElementById('overlay-menu').classList.remove('active');
});*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Assunto:', subject);
    console.log('Mensagem:', message);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
        }, function(error) {
        console.log('FAILED...', error);
        alert('Falha ao enviar a mensagem, tente novamente.');
    });
});