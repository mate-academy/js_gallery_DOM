'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = function (action) {
  action.preventDefault();

  const link = action.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  largeImg.src = link.href;
};
