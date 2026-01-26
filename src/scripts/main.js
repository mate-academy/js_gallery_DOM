'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = function (action) {
  const link = action.target.closest('a');

  if (!link) {
    return;
  }

  action.preventDefault();

  const newSrc = link.getAttribute('href');

  largeImg.src = newSrc;
};
