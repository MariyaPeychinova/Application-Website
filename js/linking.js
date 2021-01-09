definitionList = document.querySelectorAll('.linking');
linkToPage2 = document.querySelectorAll('.part-2');
linkToPage3 = document.querySelectorAll('.part-3');
linkToPage4 = document.querySelectorAll('.part-4')
fadingText = document.querySelectorAll('.text');

//change background
definitionList.forEach(function(definitionList){
definitionList.addEventListener('pointerover', () => {
    definitionList.style.backgroundColor = 'darkslategrey';
    definitionList.style.color = 'white';
    definitionList.classList.toggle('pointer');
});

//background back
definitionList.addEventListener('pointerleave', () => {
    definitionList.style.backgroundColor = null;
    definitionList.style.color = null;
});
});

//linking pages  
linkToPage2.forEach(function(linkToPage2) {
linkToPage2.addEventListener('click', () => {
   
    linkToPage2.style.animation = `defListHide 2.5s ease`;
    
    fadingText.forEach(function(fadingText) {
    fadingText.style.animation = `textOpacity 2.5s ease`;
});
    
    setTimeout(function() {
    window.location.href = 'index2.html';
    }, 2500);
});
});

linkToPage3.forEach(function(linkToPage3) {
    linkToPage3.addEventListener('click', () => {

        linkToPage3.style.animation = `defListHide 2.5s ease`;

        fadingText.forEach(function(fadingText) {
            fadingText.style.animation = `textOpacity 2.5s ease`;
        });

        setTimeout(function() {
            window.location.href = 'index3.html';
        }, 2500);
    });
});

linkToPage4.forEach(function(linkToPage4) {
    linkToPage4.addEventListener('click', () => {

        linkToPage4.style.animation = `defListHide 2.5s ease`;

        fadingText.forEach(function(fadingText) {
            fadingText.style.animation = `textOpacity 2.5s ease`;
        });

        setTimeout(function() {
            window.location.href = 'index4.html';
        }, 2500);
    });
});
