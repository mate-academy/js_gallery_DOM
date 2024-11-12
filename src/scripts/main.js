'use strict';

const mainImage = document.getElementById('largeImg');
const thumbnails = document.querySelectorAll('#thumbs .list-item__link');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (ourEvent) => {
    ourEvent.preventDefault();
    mainImage.src = thumbnail.href;
  });
});
