'use strict';

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const c1 = e.target.classList.contains('gallery__thumb');
  const c2 = e.target.classList.contains('list-item__link');

  if (!c1 && !c2) {
    return;
  }

  const bigImage = document.querySelector('#largeImg');

  if (e.target.tagName === 'IMG') {
    bigImage.src = e.target.parentElement.href;
  } else {
    bigImage.src = e.target.href;
  }
});
