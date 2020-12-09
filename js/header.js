let header = document.querySelector('header');
let name = document.querySelector('#name');
let love = document.querySelector('#love');

    function changeBackground() {
        header.style.backgroundColor = 'darkslategrey';
        name.style.color = 'white';
        love.style.color = 'white';
    }
    header.addEventListener('pointerover', changeBackground);

    function backgroundBack() {
        header.style.backgroundColor = null;
        name.style.color = null;
        love.style.color = null;
    }
    header.addEventListener('pointerleave', backgroundBack);