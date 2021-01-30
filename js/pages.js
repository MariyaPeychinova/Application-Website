function reveilleThePage() {
    let sectionReveilled = document.querySelector('.pages');
    sectionReveilled.style.animation = `pageReveille 2.5s ease`;

}

window.addEventListener('load', reveilleThePage);