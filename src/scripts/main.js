'use strict';

const thumbLinks = document.getElementById('thumbs');
const img = document.getElementById('largeImg');

thumbLinks.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.list-item__link');

  if (thumbLinks.contains(thumb)) {
    img.src = thumb.href;
  }
});
