'use strict';

const previousContainer = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

previousContainer.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();
  mainImage.src = link.href;
});
