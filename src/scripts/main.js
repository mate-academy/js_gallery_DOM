'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  e.preventDefault();

  largeImg.src = link.href;

  if (link.title) {
    largeImg.alt = link.title;
  }
});
