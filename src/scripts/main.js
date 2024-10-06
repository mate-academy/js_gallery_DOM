'use strict';

const galleryLargeImag = document.querySelector('#largeImg');
const galleryThumbs = document.querySelector('#thumbs');

galleryThumbs.onclick = (e) => {
  e.preventDefault();

  const { href } = e.target.closest('.list-item__link');

  if (href) {
    galleryLargeImag.src = href;
  }
};
