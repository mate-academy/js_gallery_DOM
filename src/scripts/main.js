'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImgElement = document.getElementById('largeImg');

const changeLargeImage = (linkElement) => {
  largeImgElement.src = linkElement.href;
};

thumbsList.addEventListener('click', (el) => {
  const link = el.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  el.preventDefault();

  changeLargeImage(link);
});
