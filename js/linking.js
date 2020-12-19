definitionList = document.querySelectorAll('.linking');
linkToPage2 = document.querySelector('.part-1');
linkToPage3 = document.querySelector('.part-2');//to do

definitionList.forEach(function(definitionList){
definitionList.addEventListener('pointerover', () => {
    definitionList.style.backgroundColor = 'darkslategrey';
    definitionList.style.color = 'white';
    definitionList.classList.toggle('pointer');
    //definitionList.style.cssText = 'cursor: pointer;';
});

definitionList.addEventListener('pointerleave', () => {
    definitionList.style.backgroundColor = null;
    definitionList.style.color = null;
});
});

     
//definitionList.forEach((definitionList) => {
    linkToPage2.addEventListener('click', () => {
    window.location.href = 'index2.html';
    //to do for the other pages
});
//});