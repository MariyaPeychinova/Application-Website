definitionList = document.querySelectorAll('.linking');
linkToPage2 = document.querySelector('.part-1');
linkToPage3 = document.querySelector('.part-2');//to do
fadingText = document.querySelector('.text');

definitionList.forEach(function(definitionList){
definitionList.addEventListener('pointerover', () => {
    definitionList.style.backgroundColor = 'darkslategrey';
    definitionList.style.color = 'white';
    definitionList.classList.toggle('pointer');
   
});

definitionList.addEventListener('pointerleave', () => {
    definitionList.style.backgroundColor = null;
    definitionList.style.color = null;
});
});

     

linkToPage2.addEventListener('click', () => {
   
    linkToPage2.style.animation = `defListHide 2.5s ease`;
    
    fadingText.style.animation = `textOpacity 2.5s ease`;
    
    setTimeout(function() {
    window.location.href = 'index2.html';
    }, 2500);
    //to do for the other pages
});
