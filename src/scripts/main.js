'use strict';

function changeMainImage(photoLink) {
  const largePhoto = document.querySelector('#largeImg');
  const newLargePhotoHref = photoLink.getAttribute('href');

  largePhoto.setAttribute('src', newLargePhotoHref);
}

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (event) => {
  const photoLink = event.target.closest('.list-item__link');

  if (!photoLink || !thumbs.contains(photoLink)) {
    return;
  }

  event.preventDefault();
  changeMainImage(photoLink);
});
