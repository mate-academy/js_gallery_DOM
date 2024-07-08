'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

const imgActivate = (e) => {
  if (e.target.classList.contains('gallery__thumb')) {
    e.preventDefault();

    const link = e.target.closest('.list-item__link');
    const href = link.getAttribute('href');

    largeImg.src = href;
  }
};

gallery.addEventListener('click', imgActivate);
