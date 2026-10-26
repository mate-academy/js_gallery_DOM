'use strict';

const mainImage = document.querySelector('#largeImg');

const thumbnailList = document.querySelector('#thumbs');

function changeImage(clickEvent) {
  const target = clickEvent.target.closest('a');

  if (target) {
    const link = target.href;

    clickEvent.preventDefault();
    mainImage.setAttribute('src', link);
  }
}

thumbnailList.addEventListener('click', changeImage);
