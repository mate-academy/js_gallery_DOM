'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', changeImg);

function changeImg(e) {
  e.preventDefault();

  const target =
    e.target.closest('.gallery__thumb') || e.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  if (e.target.classList.contains('gallery__thumb')) {
    if (
      largeImg.getAttribute('src') !== e.target.parentNode.getAttribute('href')
    ) {
      largeImg.setAttribute('src', e.target.parentNode.getAttribute('href'));
    }
  } else if (e.target.classList.contains('list-item__link')) {
    if (largeImg.getAttribute('src') !== e.target.getAttribute('href')) {
      largeImg.setAttribute('src', e.target.getAttribute('href'));
    }
  }
}
