'use strict';

const mainPicture = document.querySelector('.gallery__large-img');

const imageNavigation = document.querySelector('.gallery__list');

imageNavigation.addEventListener('click', (event1) => {
  const clickedElement = event1.target.closest('.list-item__link');

  event1.preventDefault();

  if (!clickedElement) {
    return 0;
  }

  mainPicture.src = clickedElement.href;
});
