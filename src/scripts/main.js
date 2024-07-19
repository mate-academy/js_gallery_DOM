'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    const imgUrl = link.href;

    largeImg.src = imgUrl;

    e.preventDefault();
  }
});
