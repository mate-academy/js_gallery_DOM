'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const imgsUl = document.querySelector('.gallery__list');

imgsUl.addEventListener('click', (currEvent) => {
  currEvent.preventDefault();

  const clickedA = currEvent.target.closest('a');
  const currentImg = clickedA.querySelector('img');

  if (!clickedA) {
    return;
  }

  largeImg.src = clickedA.href;
  largeImg.alt = `main image ${currentImg.alt}`;
});
