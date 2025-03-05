'use strict';

const largeImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', handleImageClick);

function handleImageClick(image) {
  image.preventDefault();

  const link = image.target.closest('a');

  largeImage.src = link.href;
}
