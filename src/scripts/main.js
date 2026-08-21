'use strict';

const big = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();

    const src = link.getAttribute('href');

    big.src = src;
  }
});
