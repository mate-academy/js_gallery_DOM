'use strict';

const bigImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  e.preventDefault();

  bigImg.src = target.href;
  bigImg.alt = target.title;
});
