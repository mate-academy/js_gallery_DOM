'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('a');

  if (target) {
    largeImg.src = target.href;
  }
});
