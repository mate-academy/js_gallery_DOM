'use strict';

const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('.list-item__link');

  if (!linkElement) {
    // eslint-disable-next-line
    return;
  }

  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = linkElement.href;
});
