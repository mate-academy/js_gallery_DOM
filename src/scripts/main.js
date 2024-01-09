'use strict';

const largeImgElem = document.querySelector('#largeImg');
const galleryListElem = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
galleryListElem.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  if (item) {
    event.preventDefault();
    largeImgElem.setAttribute('src', item.getAttribute('href'));
  }
});
