function dragAround() {
    let about = document.querySelector('.about');
    let story = document.querySelector('.story');
    let element = story.cloneNode(true);
    document.body.appendChild(element);
    element.innerText = 'm';

    //remove for mobile under 1050
    if (screen.width > 1050) { 
    element.style.cssText = 'position: absolute; left: 69%; top: 900px;  color: darkslategrey; line-height: 0.7; font-size: 150px; z-index: 100; cursor: pointer;';
    } else {
      element.style.cssText = 'display: none';
    }

    function mouseDown(event) {
        event.preventDefault(); //to prevent selecting when you click

        window.addEventListener('pointermove', mouseMove);
        window.addEventListener('pointerup', mouseUp);
    }
    element.addEventListener('pointerdown', mouseDown);

    function mouseMove(event) {
        about.style.backgroundImage = 'none';
          element.style.left = event.pageX + 'px';
          element.style.top = event.pageY + 'px';
      }

      function mouseUp(event) {
        about.style.backgroundImage = null;
          window.removeEventListener('pointermove', mouseMove);
          window.removeEventListener('pointerup', mouseUp);
      }   
}

window.addEventListener('load', dragAround);

