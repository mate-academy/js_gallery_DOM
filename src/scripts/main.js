'use strict';

const listOfImg = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

listOfImg.addEventListener('click', (replace) => {
  replace.preventDefault();

  const smallImg = replace.target.closest('.list-item__link');

  if (!smallImg) {
    return;
  }

  mainImg.src = smallImg.href;
});
