'use strict';

const list = document.querySelector('ul');

const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', onPrevClick);

function onPrevClick(e) {
  const img = e.target.closest('.list-item__link');

  if (!img) {
    return;
  };

  e.preventDefault();
  largeImg.src = img.href;
}
