'use strict';

const mainImage = document.querySelector('#largeImg');

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');
  const img = e.target.closest('img');

  if (img) {
    const bigPhoto = img.parentNode.href;

    mainImage.src = bigPhoto;
  } else if (link) {
    const bigPhoto = link.href;

    mainImage.src = bigPhoto;
  }
});
