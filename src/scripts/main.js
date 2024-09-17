'use strict';

const imageMain = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('.list-item__link');

  if (link) {
    imageMain.src = link.href;
  }
});
