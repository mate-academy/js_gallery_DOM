/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
'use strict';
// eslint-disable-next-line padding-line-between-statements
const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (event) => {
  // eslint-disable-next-line no-console
  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  event.preventDefault();
  largeImg.src = link.href;
});
