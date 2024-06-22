'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();

    const bigImg = document.getElementById('largeImg');

    bigImg.src = link.href;
  }
});
