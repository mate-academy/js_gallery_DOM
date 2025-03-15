'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const target = clickEvent.target;
  const item = target.closest('.list-item');
  const link = [...document.querySelectorAll('.list-item__link')].find(
    el => item.contains(el)
  );

  largeImg.src = link.href;
});
