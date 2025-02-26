'use strict';

document.getElementById('thumbs').addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  document.getElementById('largeImg').src = link.href;
});
