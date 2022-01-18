'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');

gallery.addEventListener('click', (occasion) => {
  occasion.preventDefault();

  const item = occasion.target.closest('.list-item__link');

  if (!item || !gallery.contains(item)) {
    return;
  } else {
    mainImg.src = item.href;
  };
});
