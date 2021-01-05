'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryNav = document.querySelector('#thumbs');

galleryNav.addEventListener('click', action => {
  action.preventDefault();

  const currentLink = action.target.closest('.list-item__link');

  if (galleryNav.contains(currentLink)) {
    largeImg.src = currentLink.href;
  }
});
