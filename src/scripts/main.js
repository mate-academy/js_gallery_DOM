'use strict';

const mainImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target.closest('.list-item__link');

  if (mainImg.src !== target.href) {
    mainImg.src = target.href;
  };
});
