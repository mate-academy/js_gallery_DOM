'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// console.log(mainImage);

thumbs.addEventListener('click', (resize) => {
  const link = resize.target.closest('a');

  resize.preventDefault();

  mainImage.src = link.href;
});
