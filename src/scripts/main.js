'use strict';

const thumbsList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

const largeImgWidth = largeImg.offsetWidth;
const largeImgHeight = largeImg.offsetHeight;

thumbsList.addEventListener('click', (eventL) => {
  eventL.preventDefault();

  let link;

  if (eventL.target.tagName === 'IMG') {
    link = eventL.target.closest('a');
  } else if (eventL.target.tagName === 'A') {
    link = eventL.target;
  } else {
    return;
  }

  largeImg.src = link.href;

  largeImg.style.width = largeImgWidth + 'px';
  largeImg.style.height = largeImgHeight + 'px';
});
