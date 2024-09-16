'use strict';

const largeImg = document.getElementById('largeImg');
const thumbnailLinks = document.querySelectorAll('.list-item__link');

thumbnailLinks.forEach(thumbnailLink => {
  thumbnailLink.addEventListener('click', e => {
    e.preventDefault();

    largeImg.src = thumbnailLink.href;
  }
  );
});
