'use strict';

const large = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (eve) => {
  const tup = eve.target.closest('a');

  if (!tup) {
    return null;
  }

  eve.preventDefault();

  large.src = tup.href;
});
