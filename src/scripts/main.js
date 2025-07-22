'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (event1) {
  event1.preventDefault();

  const target = event1.target;

  // click IMG

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      largeImg.src = link.href;
    }
  }

  if (target.tagName === 'A') {
    largeImg.src = target.href;
  }
});
