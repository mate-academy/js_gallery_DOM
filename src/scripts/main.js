'use strict';

const handlerClick = function(clickEvent) {
  const thumb = clickEvent.target.closest('.list-item__link');

  if (!thumb) {
    return;
  }

  clickEvent.preventDefault();
  mainImage.src = thumb.href;
};
const galleryList = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', handlerClick);
