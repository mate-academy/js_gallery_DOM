'use strict';

const largeImage = document.getElementById('largeImg');
const images = document.querySelectorAll('.list-item');

images.forEach(el => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();

    largeImage.src = el.querySelector('a').href;
  });
});
