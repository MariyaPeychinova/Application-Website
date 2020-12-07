let m = document.querySelector('#m');
      function changeColor() {
        m.style.color = 'green';
      }
      m.addEventListener('mouseover', changeColor);

      function colorBack() {
          m.style.color = 'darkslategrey';
      }
      m.addEventListener('mouseleave', colorBack);