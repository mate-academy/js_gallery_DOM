'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

if (!ul || !largeImg) {
  return;
}
ul.addEventListener('click', (e) => {
  const mainScreen = e.target.closest('a');

  if (!mainScreen) {
    return;
  }

  e.preventDefault();

  largeImg.src = mainScreen.href;
});
