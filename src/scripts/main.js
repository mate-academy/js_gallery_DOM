'use strict';

const list = document.querySelectorAll('.gallery__list');

const mainImg = document.getElementById('largeImg');

list[0].addEventListener('click', (obj) => {
  const item = obj.target;

  if (item.classList.contains('gallery__thumb')) {
    obj.preventDefault();

    const link = item.closest('.list-item__link');

    mainImg.src = link.href;
  }
});
