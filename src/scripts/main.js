'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

if (largeImg && thumbs) {
  thumbs.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) {
      return;
    }

    const link = e.target.closest('a');
    if (!link) {
      return;
    }

    e.preventDefault();
    largeImg.src = link.href;
  });
}
