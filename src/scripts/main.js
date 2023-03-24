'use strict';

const largeImg = document.querySelector('#largeImg');

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  largeImg.src = target.href;
});
