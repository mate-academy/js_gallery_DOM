'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const links = document.querySelector('.gallery__list');

links.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target;

  largeImg.src = link.parentElement.href;
});

// for (const link of links) {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     largeImg.src = link.href;
//   });
// };
