'use strict';

const thumbLinks = document.querySelectorAll('.list-item__link');
const img = document.getElementById('largeImg');

thumbLinks.forEach(thumb => {
  thumb.addEventListener('click', (ev) => {
    ev.preventDefault();
    img.src = thumb.href;
  });
});
