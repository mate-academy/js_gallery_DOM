'use strict';

const mainIcon = document.querySelector('#largeImg');
const smallIconsList = document.querySelector('#thumbs');

smallIconsList.addEventListener('click', (e) => {
  e.preventDefault();

  const icon = e.target.closest('.list-item');

  if (!icon) {
    return;
  }

  mainIcon.src = icon.querySelector('.list-item__link').href;
});
