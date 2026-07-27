'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target;

  const link = target.closest('.list-item__link');

  if (!link) {
    return;
  }

  clickEvent.preventDefault();
  largeImg.src = link.getAttribute('href');
  largeImg.alt = link.getAttribute('title');
});
