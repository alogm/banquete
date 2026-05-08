// Actualizar el año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Efecto Navbar (Cristal) al hacer scroll
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

// Lógica del menú móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Iniciar Carruseles Swiper
document.addEventListener('DOMContentLoaded', function () {
    var swipers = document.querySelectorAll('.swiper-fade');
    swipers.forEach(function (swiperContainer) {
        new Swiper(swiperContainer, {
            loop: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
});