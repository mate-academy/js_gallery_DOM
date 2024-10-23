'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

function updateMainImage(src) {
  largeImg.src = src;
}

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const newSrc = target.getAttribute('href');

    updateMainImage(newSrc);
  }
});
