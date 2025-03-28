'use strict';

const divEl = document.getElementById('thumbs'); 

divEl.addEventListener('click', (event) => {
    const aEl = event.target.closest('a').getAttribute('href'); 
    largeImg.src = aEl; 
    event.preventDefault(); 
  });
