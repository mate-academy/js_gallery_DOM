'use strict';

const mainPicture = document.querySelector('.gallery__large-img');

const imageNavigation = document.querySelector('.gallery__list');

imageNavigation.addEventListener('click', (clickEvent) => {
  const clickedElement = clickEvent.target.closest('.list-item__link');

  clickEvent.preventDefault();

  if (!clickedElement) {
    return;
  }

  mainPicture.src = clickedElement.href;
});
