'use strict';

const mainPicture = document.getElementById('largeImg');
const container = document.getElementById('thumbs');

container.addEventListener('click', (evt) => {
  evt.preventDefault();

  const link = evt.target.closest('.list-item__link');
  const newPicture = link.getAttribute('href');

  mainPicture.src = newPicture;
});
