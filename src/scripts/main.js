'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const el = e.target.closest('.list-item__link');

  if (!el) {
    return;
  };

  largeImg.setAttribute('src', el.href);
});
