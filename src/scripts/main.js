'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('.gallery__large-img');

function changeImage(imageEvent) {
  const element = imageEvent.target;

  imageEvent.preventDefault();

  if (element.className === 'gallery__img gallery__thumb') {
    largeImage.src = element.parentElement.href;
  } else if (element.className === 'list-item__link') {
    largeImage.src = element.href;
  }
}

gallery.addEventListener('click', changeImage);
