'use strict';

const thumbs = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const { target } = e;

  const { href } = target.parentElement;

  mainImage.src = href;
});
