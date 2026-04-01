'use strict';

const bigImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  let link;

  if (target.tagName === 'IMG') {
    link = target.closest('a');
  } else if (target.tagName === 'A') {
    link = target;
  } else {
    return;
  }

  bigImage.src = link.href;
  bigImage.alt = link.querySelector('img').alt;
});
