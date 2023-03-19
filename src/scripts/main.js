'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  const selected = e.target.closest('.list-item__link');

  if (!selected || !thumbs.contains(selected)) {
    return;
  }

  largeImg.src = selected.href;
});
