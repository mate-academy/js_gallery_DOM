/* eslint-disable no-shadow */
'use strict';

const mainImage = document.querySelector('#largeImg');

const thumbsUl = document.querySelector('#thumbs');

const imageHandler = (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  mainImage.src = link.href;
};

thumbsUl.addEventListener('click', imageHandler);
