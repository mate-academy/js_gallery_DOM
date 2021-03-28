'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (item) => {
  item.preventDefault();

  const thumbnail = item.target.closest('a');

  largeImg.src = thumbnail.href;
});
