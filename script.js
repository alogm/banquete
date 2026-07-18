document.addEventListener('DOMContentLoaded', () => {
    // 1. Año en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Efecto Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-nav');
                navbar.classList.remove('bg-transparent', 'py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('glass-nav', 'py-2');
                navbar.classList.add('bg-transparent', 'py-4');
            }
        });
    }

    // 3. Menú Móvil
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // 4. Inicializar Carruseles (Swiper genérico)
    // Detecta tanto .swiper-fade como .parrilladaSwiper
    const swipersFade = document.querySelectorAll('.swiper-fade');
    swipersFade.forEach(container => {
        new Swiper(container, {
            loop: true,
            effect: "fade",
            autoplay: { delay: 3500, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        });
    });

    const swipersParrilla = document.querySelectorAll('.parrilladaSwiper');
    swipersParrilla.forEach(container => {
        new Swiper(container, {
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    });
});