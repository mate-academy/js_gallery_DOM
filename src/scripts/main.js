'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  let newSrc = '';

  if (e.target.tagName === 'IMG') {
    const linkEl = e.target.closest('a');

    if (linkEl.getAttribute('href')) {
      newSrc = linkEl.href;
    }
  } else if (e.target.tagName === 'A') {
    if (e.target.getAttribute('href')) {
      newSrc = e.target.href;
    }
  } else {
    return;
  }

  if (largeImg.getAttribute('src') !== newSrc) {
    largeImg.setAttribute('src', newSrc);
  }
});
