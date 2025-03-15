'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbList = document.querySelector('#thumbs');

thumbList.addEventListener('click', (e) => {
  e.preventDefault();

  const newLargeImgLink = e.target.closest('a');

  largeImg.src = newLargeImgLink.href;
});
