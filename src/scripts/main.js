'use strict';

const activeImg = document.querySelector('.gallery__large-img');
const thumb = document.querySelector('.gallery__list');

thumb.addEventListener('click', (clickevent) => {
  const link = clickevent.target.closest('.list-item__link');
  const img = clickevent.target.closest('.gallery__thumb');

  clickevent.preventDefault();

  if (!link || !img) {
    return;
  }

  const imgSrc = link.getAttribute('href');

  activeImg.removeAttribute('src');
  activeImg.setAttribute('src', imgSrc);
});
