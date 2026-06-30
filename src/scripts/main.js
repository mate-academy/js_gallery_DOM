'use strict';

const gallery = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

if (gallery && largeImg) {
  gallery.addEventListener('click', (e) => {
    const thumbnailLink = e.target.closest('a');

    if (!thumbnailLink || !gallery.contains(thumbnailLink)) {
      return;
    }

    e.preventDefault();

    largeImg.src = thumbnailLink.href;
    largeImg.alt = thumbnailLink.title || '';
  });
}
