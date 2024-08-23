'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.querySelector('#largeImg');

  gallery.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.tagName === 'IMG') {
      target = target.closest('a');
    }

    if (target.tagName === 'A' && target.href) {
      largeImg.src = target.href;

      evt.preventDefault();
    }
  });
});
