'use strict';

const generalImg = document.getElementById('largeImg');
const listImg = document.getElementById('thumbs');

listImg.addEventListener('click', (evt) => {
  evt.preventDefault();

  let target = evt.target;

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  if (target && target.tagName === 'A') {
    generalImg.src = target.href;
  }
});
