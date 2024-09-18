'use strict';

const mainPicture = document.querySelector('#largeImg');

const picturesList = document.querySelector('.gallery__list');

picturesList.addEventListener('click', (e) => {
  e.preventDefault();

  const picture = e.target.closest('.list-item__link');

  if (picture) {
    const newScr = picture.href;

    mainPicture.src = newScr;
  }
});
