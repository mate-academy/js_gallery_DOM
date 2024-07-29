'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target.closest('a');

  if (target) {
    largeImg.src = target.href;
  }
});
