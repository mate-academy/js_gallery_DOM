'use strict';

const imageList = document.querySelector('#thumbs');
const frontImg = document.querySelector('#largeImg');

imageList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const targetImgLink = clickEvent.target.closest('.list-item__link');

  frontImg.src = targetImgLink.href;
});
