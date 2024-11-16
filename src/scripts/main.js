'use strict';

const mainImg = document.querySelector('#largeImg');
const listImg = document.querySelector('#thumbs');

listImg.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (!target) {
    return;
  }

  if (target.tagName === 'IMG') {
    mainImg.src = target.parentElement.href;
  } else if (target.tagName === 'A') {
    mainImg.src = target.href;
  }
});
