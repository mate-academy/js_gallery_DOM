'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbnailLinks = document.querySelectorAll('.list-item__link');

thumbnailLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.src = link.href;
  });
});
