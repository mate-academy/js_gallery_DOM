'use strict';

const largeImg = document.querySelector('#largeImg');
const listSmallImg = document.querySelector('.gallery__list');

listSmallImg.addEventListener('click', function(eventClick) {
  const choiceImg = eventClick.target.closest('a');

  if (!choiceImg) {
    return;
  }

  largeImg.src = choiceImg.href;
  eventClick.preventDefault();
});
