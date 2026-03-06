'use strict';

const gallery = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();
    mainImg.src = link.href;
  }
});
