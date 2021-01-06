'use strict';

const bigImage = document.querySelector('#largeImg');
const galleryItem = document.querySelector('#thumbs');

galleryItem.addEventListener('click', myevent => {
  myevent.preventDefault();

  const clickedImg = myevent.target.closest('.list-item__link');

  if (galleryItem.contains(clickedImg)) {
    bigImage.src = clickedImg.href;
  }
});
