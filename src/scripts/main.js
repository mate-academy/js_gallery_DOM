'use strict';

const big = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  const referens = e.target.closest('a');

  if (referens) {
    e.preventDefault();

    const absoluteUrl = referens.href;

    big.setAttribute('src', absoluteUrl);
  }
});
