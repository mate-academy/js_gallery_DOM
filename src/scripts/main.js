'use strict';

const largeImage = document.querySelector('#largeImg');
const elementUl = document.querySelector('#thumbs');

elementUl.addEventListener('click', eventClick => {
  eventClick.preventDefault();

  const link = eventClick.target.closest('.list-item__link');

  largeImage.src = link ? link.href : largeImage.src;
});
