'use strict';

const largeImg = document.getElementById('largeImg');
const imgList = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
imgList.addEventListener('click', (event) => {
  event.preventDefault();

  const img = event.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  const newImgSrc = img.getAttribute('href');

  largeImg.setAttribute('src', newImgSrc);
});
