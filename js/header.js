const header = document.querySelector('header');
const theName = document.querySelector('#name');
const love = document.querySelector('#love');

    function changeBackground() {
        header.style.backgroundColor = 'darkslategrey';
        theName.style.color = 'white';
        love.style.color = 'white';
    }
    header.addEventListener('pointerover', changeBackground);

    function backgroundBack() {
        header.style.backgroundColor = null;
        theName.style.color = null;
        love.style.color = null;
    }
    header.addEventListener('pointerleave', backgroundBack);