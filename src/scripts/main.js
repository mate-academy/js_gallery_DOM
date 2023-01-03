'use strict';

const selectElement = document.getElementById('thumbs');
const imageReplace = document.getElementById('largeImg');

selectElement.addEventListener('click', (ev) => {
  const item = ev.target.closest('.list-item__link');

  if (!item || !selectElement.contains(item)) {
    return;
  }

  ev.preventDefault();
  imageReplace.src = item.href;
});
