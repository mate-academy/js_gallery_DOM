'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (thumbEvent) => {
  const item = thumbEvent.target.closest('.list-item');
  const smallImg = item.querySelector('.list-item__link');

  thumbEvent.preventDefault();

  largeImg.src = smallImg.getAttribute('href');
});
