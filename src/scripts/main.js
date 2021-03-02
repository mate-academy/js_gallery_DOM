'use strict';

const mainPicture = document.querySelector('#largeImg');
const picturesList = document.querySelector('#thumbs');

picturesList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  mainPicture.src = item.href;
});
