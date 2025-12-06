'use strict';

const mainImg = document.querySelector('#largeImg'); // велике зображення
const galleryList = document.querySelector('#thumbs'); // галерея

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const linkImg = e.target.closest('.list-item__link');
  const galleryImg = e.target.closest('.gallery__img');

  if (!linkImg && !galleryImg) {
    return;
  }

  const newSrc = linkImg.href;

  mainImg.src = newSrc;
});
