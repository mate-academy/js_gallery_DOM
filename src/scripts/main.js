'use strict';

const mainImage = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();
  }

  const item = e.target.closest('.list-item');

  if (!item) {
    return;
  }

  const largeImageUrl = link.href;

  if (largeImageUrl) {
    mainImage.src = largeImageUrl;
  }
});
