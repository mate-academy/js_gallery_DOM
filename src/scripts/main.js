'use strict';

const mainImg = document.getElementById('largeImg');
const togglerImg = document.getElementById('thumbs');

togglerImg.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();

  if (!item || !togglerImg.contains(item)) {
    return;
  };
  mainImg.src = item.href;
});
