'use strict';
const gallery = document.querySelector('.gallery__list');
const imgLarge = document.getElementById('largeImg');


gallery.addEventListener(('click'), (event) => {
  event.preventDefault();
  const item = event.target.closest('.list-item__link');
  imgLarge.setAttribute('src', item.href);
});

