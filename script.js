document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav');
        navbar.classList.remove('bg-transparent', 'py-4');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('glass-nav', 'py-2');
        navbar.classList.add('bg-transparent', 'py-4')
    }


});
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});