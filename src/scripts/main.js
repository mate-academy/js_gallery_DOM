'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' || target.tagName === 'A') {
    const largeImg = document.getElementById('largeImg');
    const newSrc = target.tagName === 'IMG' ? target.src : target.href;

    largeImg.src = newSrc;
  }
});
