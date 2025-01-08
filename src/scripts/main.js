'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const newImgSrc =
      target.tagName === 'IMG' ? target.parentElement.href : target.href;

    largeImg.src = newImgSrc;
  }
});
