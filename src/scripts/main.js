'use strict';

const thumbs = document.getElementById('thumbs');
const large = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('a');

  if (target) {
    large.src = target.href;
  }
});
