'use strict';

const imageList = document.querySelector('#thumbs');
const frontImg = document.querySelector('#largeImg');

imageList.addEventListener('click', (eventObj) => {
  eventObj.preventDefault();

  const targetImgLink = eventObj.target.closest('a');

  frontImg.setAttribute('src', targetImgLink.href);
});
