'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

const handleClick = (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  if (target.nodeName !== 'A') {
    return;
  }
  largeImg.setAttribute('src', target.href);
};

gallery.addEventListener('click', handleClick);
