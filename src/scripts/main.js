'use strict';

const largeIMG = document.getElementById('largeImg');

const smallIMG = document.getElementById('thumbs');

smallIMG.addEventListener('click', (evnt) => {
  evnt.preventDefault();

  if (evnt.target.closest('a')) {
    const link = evnt.target.closest('a');

    largeIMG.src = link.href;
  }
});
