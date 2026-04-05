'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  const bigImageUrl = link.getAttribute('href') || link.dataset.full;

  if (!bigImageUrl) {
    return;
  }
  mainImg.src = bigImageUrl;
});
