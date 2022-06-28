'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (event) => {
  const item = event.target;

  const toChange = item.closest('a');
  const href_ = toChange.getAttribute('href');

  mainImage.setAttribute('src', href_);
  event.preventDefault();
});
