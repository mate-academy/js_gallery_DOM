/* eslint-disable no-undef */
'use strict';

const listOfImg = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

listOfImg.addEventListener('click', (replace) => {
  replace.preventDefault();

  if (!(replace.target.matches('.list-item__link'))
    && !(replace.target.matches('.gallery__img'))) {
    return;
  }

  mainImg.src = `${replace.target.parentElement.href}`;
});
