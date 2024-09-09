'use strict';

const el = {
  container: document.querySelector('.gallery'),
  largeImg: document.getElementById('largeImg'),
  smallImgs: document.getElementsByClassName('gallery__thumb'),
};

el.container.addEventListener('click', (ev) => {
  for (const image of el.smallImgs) {
    const isClickFound =
      ev.target === image || ev.target === image.closest('a');

    if (isClickFound) {
      ev.preventDefault();

      const path = `.${image.closest('a').getAttribute('href')}`;

      el.largeImg.setAttribute('src', path);
    }
  }
});
