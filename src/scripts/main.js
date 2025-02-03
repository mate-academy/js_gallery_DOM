'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      largeImg.src = link.href;
      largeImg.alt = link.title;
    }
  }
});
