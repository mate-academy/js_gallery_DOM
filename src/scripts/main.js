'use strict';

const thumbsList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsList.addEventListener('click', e => {
  e.preventDefault();

  const imgSrc = e.target.closest('.list-item__link').href;

  largeImg.src = imgSrc;
});
