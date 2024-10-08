'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('a');

  if (link) {
    largeImg.src = link.href;
  }
});
