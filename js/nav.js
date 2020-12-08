function navSlide() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    function openNavLinks() {
        nav.classList.toggle('nav-active');
    }
console.log(hamburger)
    hamburger.addEventListener('click', openNavLinks);
}

navSlide();