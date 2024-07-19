'use strict';

const bigImg = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('.list-item__link');

  bigImg.src = link.href;
});
