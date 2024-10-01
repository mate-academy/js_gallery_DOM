'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', changeImg);

function changeImg(clickEvent) {
  clickEvent.preventDefault();

  if (clickEvent.target.classList.contains('gallery__thumb')) {
    if (largeImg.src !== clickEvent.target.parentNode.href) {
      largeImg.src = clickEvent.target.parentNode.href;
    }
  } else if (clickEvent.target.classList.contains('list-item__link')) {
    if (largeImg.src !== clickEvent.target.href) {
      largeImg.src = clickEvent.target.href;
    }
  }
}
