'use strict';

const galleryList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const smallImgLink = event.target.closest('.list-item__link');

  if (smallImgLink && galleryList.contains(smallImgLink)) {
    largeImg.src = smallImgLink.href;
  }
});
