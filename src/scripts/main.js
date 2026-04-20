'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const targetImg = e.target.closest('img');
  const targetLink = e.target.closest('a');

  if (targetImg) {
    const bigPhoto = targetImg.parentNode.href;

    largeImg.src = bigPhoto;
  } else if (targetLink) {
    const bigPhoto = targetLink.href;

    largeImg.src = bigPhoto;
  }
});
