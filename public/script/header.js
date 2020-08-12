let links = document.getElementById('links');
let menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    links.classList.toggle('dropdown');
});