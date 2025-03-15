'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.onclick = function (e) {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' && target.classList.contains('gallery__thumb')) {
    const parentLink = target.closest('a');

    if (parentLink) {
      largeImg.src = parentLink.href;
    }
  } else if (target.tagName === 'A') {
    largeImg.src = target.href;
  }
};
