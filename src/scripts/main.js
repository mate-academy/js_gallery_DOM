'use strict';

const list = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (even) => {
  even.preventDefault();

  const item = even.target.closest('.list-item');
  const link = item.querySelector('a');

  bigImg.src = link.href;
});
