'use strict';

const generalPicture = document.getElementById('largeImg');
const pictures = document.querySelectorAll('a');

pictures.forEach((picture) => {
  picture.addEventListener('click', (e) => {
    e.preventDefault();
    generalPicture.src = `${picture.href}`;
  });
});
