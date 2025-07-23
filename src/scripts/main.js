'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (e) {
  const target = e.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      e.preventDefault();
      largeImg.src = link.href;
    }
  }

  if (target.tagName === 'A') {
    e.preventDefault();
    largeImg.src = target.href;
  }
});
