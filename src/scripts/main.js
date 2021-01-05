'use strict';

const images = document.getElementById('thumbs');
const bigImage = document.getElementById('largeImg');

images.addEventListener('click', (someEvent) => {
  const link = someEvent.target.closest('.list-item__link');

  if (!link || !images.contains(link)) {
    return;
  }

  someEvent.preventDefault();

  bigImage.src = link.href;
});
