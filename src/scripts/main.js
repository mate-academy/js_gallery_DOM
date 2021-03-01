'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('#thumbs');

const changeBigImg = (element) => {
  element.preventDefault();

  const target = element.target;

  if (!target.closest('.list-item')) {
    return;
  }

  largeImg.src = target.closest('a').href;
};

thumbs.addEventListener('click', changeBigImg);
