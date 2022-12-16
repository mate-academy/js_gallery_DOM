'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

function changeImg(evnt) {
  const picture = evnt.target.closest('a');

  if (!picture) {
    return;
  }

  evnt.preventDefault();
  largeImg.setAttribute('src', picture.href);
};

galleryList.addEventListener('click', changeImg);
