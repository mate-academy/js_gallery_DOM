'use strict';

// Receiving pictures from gallery
const mainPic = document.getElementById('largeImg');
const images = document.querySelectorAll('#thumbs a');

// Prevention of default events and replacing pictures
images.forEach((anchor) => {
  anchor.addEventListener('click', (defolt) => {
    defolt.preventDefault();
    mainPic.src = anchor.href;
  });
});
