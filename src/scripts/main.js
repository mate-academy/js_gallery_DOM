'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', handleThumbnailClick);
}

function handleThumbnailClick(e) {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link && link.href) {
    updateLargeImage(link.href);
  }
}

function updateLargeImage(src) {
  try {
    const url = new URL(src);

    largeImg.src = url.href;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Неверный URL:', src);
  }
}
