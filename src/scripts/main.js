'use strict';

const mainImage = document.querySelector('.gallery__large-img');

const galleryLi = document.querySelector('.gallery__list');

galleryLi.addEventListener('click', function (evt) {
  evt.preventDefault();

  const target = evt.target.closest('.list-item__link');

  if (target) {
    const getHref = target.getAttribute('href');

    mainImage.setAttribute('src', getHref);
  }
});
