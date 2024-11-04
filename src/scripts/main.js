'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const newSrc = e.target.parentElement.href;

    largeImg.src = newSrc;
  }
});
