'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.list-item__link');

  if (thumb && thumbs.contains(thumb)) {
    largeImg.src = thumb.href;
  }
});
