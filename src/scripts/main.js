'use strict';

const mainImg = document.querySelector('.gallery__large-img');

document.addEventListener('click', (image) => {
  const link = image.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  image.preventDefault();

  const imageUrl = link.href;

  mainImg.src = imageUrl;
});
