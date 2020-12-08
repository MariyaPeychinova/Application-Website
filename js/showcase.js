let m = document.querySelector('.m');

    function biggerLighter(event) {
      event.target.classList.add('mChanged');
    }
    m.addEventListener('mouseover', biggerLighter);

    function changeBack(event) {
      event.target.classList.remove('mChanged');
    }
    m.addEventListener('mouseleave', changeBack);

//to do mobile maybe
     