let logo = document.getElementById('logo');
let links = document.getElementById('links');
let menu = document.getElementById('menu');


menu.addEventListener('click', () => {
    links.classList.toggle('dropdown');
});
logo.classList.remove('hiding-above');
links.classList.remove('hiding-left');