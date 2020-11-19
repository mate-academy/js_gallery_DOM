'use strict';

const gallaryContainer = document.querySelector('.gallery__list');

const handler = (event) => {
  const largeImg = document.querySelector('#largeImg');
  const element = event.target.closest('a');

  if (!element || !gallaryContainer.contains(element)) {
    return;
  }
  event.preventDefault();

  largeImg.src = element.href;
};

gallaryContainer.addEventListener('click', handler);
