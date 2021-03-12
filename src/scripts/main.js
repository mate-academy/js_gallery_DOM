'use strict';

const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (action) => {
  action.preventDefault();

  const imgLink = action.target.closest('.list-item__link');

  if (imgList.contains(imgLink)) {
    largeImg.src = imgLink.href;
  }
});
