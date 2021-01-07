'use strict';

const mainImg = document.querySelector('#largeImg');

const smallImages = document.querySelector('#thumbs');

function selectImg(e) {
  const image = e.target.closest('.list-item__link');

  if (!image || !smallImages.contains(image)) {
    return;
  }

  e.preventDefault();
  mainImg.src = image.href;
}

smallImages.addEventListener('click', selectImg);
