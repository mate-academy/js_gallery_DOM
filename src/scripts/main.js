/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  event.preventDefault();

  largeImg.src = link.href;
  console.log('target', event.target);
  console.log('currenTarget', event.currentTarget);
});
