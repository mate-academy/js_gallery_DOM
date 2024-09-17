'use strict';

const largImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item');

  const link = listItem.querySelector('.list-item__link').href;

  largImg.src = link;
});
