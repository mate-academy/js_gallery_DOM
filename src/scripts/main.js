'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbnails = document.querySelectorAll('.gallery__thumb');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function(e) {
    e.preventDefault();

    largeImg.src = thumbnail.parentElement.href;
  });
});
