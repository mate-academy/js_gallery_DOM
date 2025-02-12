'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG') {
    const largeImg = document.getElementById('largeImg');
    const newSrc = target.parentElement.href;

    largeImg.src = newSrc;
  }
});
