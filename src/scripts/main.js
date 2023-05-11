'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const newSrc = target.tagName === 'IMG'
      ? target.parentNode.href
      : target.href;

    largeImg.src = newSrc;
  }
});
