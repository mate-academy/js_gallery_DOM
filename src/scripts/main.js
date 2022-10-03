'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = function(evt) {
  const selected = evt.target.closest('.list-item__link');

  if (!selected) {
    return;
  }

  largeImg.src = selected.href;
  evt.preventDefault();
};
