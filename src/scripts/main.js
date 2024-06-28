'use strict';

const mainImg = document.getElementById('largeImg');
const items = document.querySelectorAll('.gallery__list a');

items.forEach((item) => {
  item.addEventListener('click', (eventClick) => {
    eventClick.preventDefault();

    const newSrc = item.getAttribute('href');

    mainImg.src = newSrc;
  });
});
