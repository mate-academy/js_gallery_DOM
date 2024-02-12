'use strict';

const largeImg = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
function clickGallarySmallImg(event) {
  largeImg.setAttribute('src', this.href);

  event.preventDefault();
};

const galleryLinks = document.querySelectorAll('.list-item__link');

galleryLinks.forEach((link) => {
  link.addEventListener('click', clickGallarySmallImg);
});
