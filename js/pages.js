function reveilleThePage() {
    let sectionReveilled = document.querySelector('.page2');
    sectionReveilled.style.animation = `pageReveille 2.5s ease`;

}

window.addEventListener('load', reveilleThePage);