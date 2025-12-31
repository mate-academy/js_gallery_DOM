'use strict';

const showImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  switch (e.target.nodeName) {
    case 'IMG': {
      showImg.src = e.target.parentElement.href;
      break;
    }

    case 'A': {
      showImg.src = e.target.href;
      break;
    }
    default:
      break;
  }
});
