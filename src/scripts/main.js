'use strict';

const large = document.querySelector('#largeImg');

document.querySelector('.gallery__list').addEventListener('click', ev => {
  ev.preventDefault();

  const link = ev.target.closest('.list-item__link');

  if (link) {
    large.src = link.href;
  }
});
