'use strict';

// const largeImg = document.querySelector('#largeImg');
// const thumbnailLinks = document.querySelectorAll('.list-item__link');

// thumbnailLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     largeImg.src = link.href;
//   });
// });

const largeImg = document.querySelector('#largeImg');
const thumbnailList = document.querySelector('.gallery__list');

thumbnailList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  largeImg.src = link.href;
});
