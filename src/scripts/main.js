'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imageList = document.querySelector('.gallery__list');

function handleImageThumbnailClick(clickEvent) {
  clickEvent.preventDefault();

  if (clickEvent.target.tagName === 'IMG') {
    largeImg.src = clickEvent.target.parentElement.href;
  } else {
    largeImg.src = clickEvent.target.href;
  }
}

imageList.addEventListener('click', handleImageThumbnailClick);
