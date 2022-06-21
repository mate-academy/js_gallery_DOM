'use strict';

const largeImg = document.getElementById('largeImg');

const list = document.querySelector('.gallery__list');

for (const item of list.querySelectorAll('.list-item')) {
  item.addEventListener('click', (events) => {
    events.preventDefault();

    const link = events.target.closest('.list-item__link');

    largeImg.src = link.href;
  });
}
