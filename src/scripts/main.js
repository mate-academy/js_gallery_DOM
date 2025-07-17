'use strict';

const thumbs = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const image = e.target.closest('a');

  if (!image) {
    return;
  }

  showImg(image.href);
});

function showImg(img) {
  mainImage.src = img;
}
