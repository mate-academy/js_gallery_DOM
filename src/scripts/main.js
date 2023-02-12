'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target;
  const largeImg = document.querySelector('#largeImg');

  largeImg.setAttribute('src', item.parentNode.href);
});
