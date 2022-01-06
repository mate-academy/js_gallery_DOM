'use strict';

const thumbs = document.getElementById('thumbs');

const bigImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (action) => {
  action.preventDefault();

  const item = action.target.closest('.gallery__thumb');

  if (!item) {
    return;
  }

  bigImg.src = item.src;
});
