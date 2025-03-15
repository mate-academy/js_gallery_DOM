'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (evt) {
  evt.preventDefault();

  let target = evt.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const newSrc = target.href;

    largeImg.src = newSrc;
  }
});
