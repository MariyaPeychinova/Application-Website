let m = document.querySelector('.m');

    function biggerLighter(event) {
      event.target.classList.add('mChanged');
    }
    m.addEventListener('pointerover', biggerLighter);

    function changeBack(event) {
      event.target.classList.remove('mChanged');
    }
    m.addEventListener('pointerleave', changeBack);

//to do mobile maybe
     