'use strict';

const mainImg = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');
const items = list.querySelectorAll('.list-item');

items.forEach((item) => {
  const link = item.querySelector('a');

  item.addEventListener('click', (i) => {
    i.preventDefault();
    mainImg.src = link.href;
  });
});
