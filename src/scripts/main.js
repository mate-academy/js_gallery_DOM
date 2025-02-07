'use strict';

const listThumbnails = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');

if (listThumbnails && bigImg) {
  listThumbnails.onclick = (e) => {
    e.preventDefault();

    if (e.target.tagName !== 'IMG') {
      return;
    }

    const link = e.target.closest('a');

    if (link) {
      const largeImgSrc = link.href;

      bigImg.setAttribute('src', largeImgSrc);
    }
  };
}
