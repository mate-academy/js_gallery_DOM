'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      largeImg.src = link.href;
    }
  }
});
