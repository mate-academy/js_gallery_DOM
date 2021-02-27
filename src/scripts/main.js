'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('#thumbs');

const changeBigImg = (element) => {
  const target = element.target.closest('a');

  element.preventDefault();

  if (!target.closest('.list-item')) {
    return;
  }

  largeImg.src = target.href;
};

thumbs.addEventListener('click', changeBigImg);
