'use strict';

const mainScreen = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  mainScreen.src = item.href;
});
