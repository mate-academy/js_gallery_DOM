'use strict';

const galery = document.querySelector('#largeImg');
const list = document.querySelectorAll('.list-item');

for (const item of list) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const src = e.target.closest('a').href;

    galery.src = src;
  });
};
