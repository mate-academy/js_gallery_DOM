'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const thumbnails = document.querySelectorAll('.gallery__thumb');

function changeImage(imageEvent) {
  let href = imageEvent.target.href;

  if (!href) {
    href = imageEvent.target.parentElement.href;
  }

  imageEvent.preventDefault();
  largeImage.src = href;
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', changeImage);
  thumbnail.parentElement.addEventListener('click', changeImage);
});
