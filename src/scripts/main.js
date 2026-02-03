'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

const clickHandler = (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
};

thumbs.addEventListener('click', clickHandler);
