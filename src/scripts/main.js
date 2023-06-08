'use strict';

const images = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

images.addEventListener('click', e => {
  e.preventDefault();
  let itemTarget = e.target.closest('.list-item__link');
  mainImage.src = itemTarget.href;
});
