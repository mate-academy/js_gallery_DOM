'use strict';

const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (action) => {
  action.preventDefault();

  const imgLink = action.target.closest('.list-item__link');

  if (!imgLink) {
    return false;
  }

  largeImg.src = imgLink.href;
});
