'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function (e) {
  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  if (target && target.tagName === 'A' && target.href) {
    e.preventDefault();
    largeImg.src = target.href;
  }
});
