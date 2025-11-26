'use strict';

const list = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => e.preventDefault(), { capture: true });

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    bigImg.src = e.target.parentElement.href;
  } else if (e.currentTarget.tagName === 'A') {
    bigImg.src = e.currentTarget.href;
  }
});
