'use strict';

const mainImage = document.getElementById('largeImg');
const togglerImage = document.getElementById('thumbs');

togglerImage.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();

  if (!item || !togglerImage.contains(item)) {
    return;
  };
  mainImage.src = item.href;
});
