'use strict';

const mainImg = document.querySelector('#largeImg');
const container = document.querySelector('#thumbs');

container.addEventListener('click', (ev) => {
  ev.preventDefault();

  const img = ev.target.closest('a');

  mainImg.src = img.href;
});
