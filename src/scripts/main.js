'use strict';

const largeImg = document.querySelector('#largeImg');
const listItem = document.querySelectorAll('#thumbs a');

listItem.forEach((thumb) => {
  thumb.addEventListener('click', (event) => {
    event.preventDefault(); 

    const newSrc = thumb.getAttribute('href');

    largeImg.src = newSrc;
  });
});
