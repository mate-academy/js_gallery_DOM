'use strict';

document.querySelector('#thumbs').addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('#largeImg').src =
    e.target.closest('.list-item__link').href;
});
