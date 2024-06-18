const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')});

toggleButton.addEventListener('click', () => {
searchBox.classList.toggle('active')});



function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {

        window.location.href = 'crud.html';
    } else {
        window.location.href = 'user.html';
    }
}


/*Crud*/
