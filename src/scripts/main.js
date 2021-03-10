'use strict';

const largeImage = document.querySelector('#largeImg');
const imageList = document.querySelector('#thumbs');

imageList.addEventListener('click', (action) => {
  action.preventDefault();

  const imageLink = action.target.closest('.list-item__link');

  if (imageLink || imageList.contains(imageLink)) {
    largeImage.src = imageLink.href;
  }
});
