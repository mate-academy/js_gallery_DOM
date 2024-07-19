'use strict';

const bigImg = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  bigImg.src = link.href;
});
