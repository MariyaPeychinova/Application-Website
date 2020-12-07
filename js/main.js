function dragAround() {
    let about = document.querySelector('.about');
    let story = document.querySelector('.story');
    let element = story.cloneNode(true);
    document.body.appendChild(element);
    element.innerText = 'M';
    element.style.cssText = 'position: absolute; left: 69%; top: 900px;  color: darkslategrey; line-height: 0.7; font-size: 150px; z-index: 100; cursor: pointer;';

    function mouseDown(event) {
        event.preventDefault(); //doesn't select when you click

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
    }
    element.addEventListener('mousedown', mouseDown);

    function mouseMove(event) {
        about.style.backgroundImage = 'none';
          element.style.left = event.pageX + 'px';
          element.style.top = event.pageY + 'px';
      }

      function mouseUp(event) {
        about.style.backgroundImage = null;
          window.removeEventListener('mousemove', mouseMove);
          window.removeEventListener('mouseup', mouseUp);
      }   
}

window.addEventListener('load', dragAround);