'use strict';

const mainImage = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item');
  const link = e.target.closest('a');

  if (!link || !item) {
    return;
  }

  e.preventDefault();

  const largeImageUrl = link.href;

  if (largeImageUrl) {
    mainImage.src = largeImageUrl;
  }
});
