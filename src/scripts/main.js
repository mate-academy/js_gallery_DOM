'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (ev) {
  ev.preventDefault();

  const target = ev.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      const mainImage = document.getElementById('largeImg');

      mainImage.src = link.href;
    }
  }
});
