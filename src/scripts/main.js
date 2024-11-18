'use strict';

const mainImg = document.querySelector('#largeImg');
const listImg = document.querySelector('#thumbs');

listImg.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG') {
    const parentElement = target.parentElement;

    if (parentElement && parentElement.tagName === 'A') {
      mainImg.src = parentElement.href;
    }
  } else if (target.tagName === 'A') {
    mainImg.src = target.href;
  }
});
