'use strict';

const ul = document.querySelector(`.gallery__list`);
const mainImage = document.querySelector(`#largeImg`);

ul.addEventListener(`click`, function(e) {
  e.preventDefault();

  const link = e.target.closest(`.list-item__link`);

  if (!link) {
    return;
  }

  mainImage.src = link.href;
});
