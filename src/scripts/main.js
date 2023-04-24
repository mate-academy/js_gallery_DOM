'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('a');

  if (thumbs.contains(item)) {
    mainImage.src = item.href;
  }
});
