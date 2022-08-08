'use strict';

const gallery = document.querySelector(`.gallery__list`);
const image = document.querySelector(`#largeImg`);

gallery.addEventListener('click', function(sv) {
  sv.preventDefault();

  const link = sv.target.closest(`.list-item__link`);

  if (!link) {
    return;
  }

  image.src = link.href;
});
