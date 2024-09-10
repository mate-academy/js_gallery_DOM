'use strict';

const largeImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (eve) => {
    largeImage.src = link.href;
    eve.preventDefault();
  });
});
