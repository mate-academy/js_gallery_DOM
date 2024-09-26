'use strict';

const gallery = document.querySelector('.gallery');
const bigImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.tagName === 'IMG'
    || clickEvent.target.tagName === 'A') {
    const newImgUrl = clickEvent.target.closest(
      'a').getAttribute('href');

    bigImage.src = newImgUrl;
  }
}
);
