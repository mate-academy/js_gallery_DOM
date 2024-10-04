'use strict';

const bigItem = document.querySelector('.gallery__large-img');

const smallItem = document.querySelector('.gallery__list');

smallItem.addEventListener('click', function (e) {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigItem.src = link.href;
  e.preventDefault();
});
