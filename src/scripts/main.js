'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const elem = e.target.closest('.list-item__link');
  const elemHref = elem.getAttribute('href');

  mainImage.src = elemHref;
});
