'use strict';

const images = document.querySelectorAll('a');
const mainImage = document.getElementById('largeImg');

images.forEach((item) => {
  item.addEventListener('click', e => {
    e.preventDefault();
    // let itemTarget = event.target.closest('finItem');
    mainImage.src = item.href;
  });
});
