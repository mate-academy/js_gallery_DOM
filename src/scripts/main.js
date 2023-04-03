'use strict';

const largeImg = document.querySelector('#largeImg');
const listImg = document.querySelector('#thumbs');

listImg.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const newHref = e.target.parentNode.href;

    largeImg.src = newHref;
  }
});
