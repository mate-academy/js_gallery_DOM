'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link || !link.href || !largeImg) {
    return;
  }

  const imgElement = link.querySelector('img');

  e.preventDefault();

  largeImg.src = link.href;

  if (imgElement && imgElement.alt) {
    largeImg.alt = imgElement.alt;
  } else {
    largeImg.alt = 'Enlarged image from gallery';
  }
});
