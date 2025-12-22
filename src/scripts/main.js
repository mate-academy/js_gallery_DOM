'use strict';

const imageUl = document.querySelector('#thumbs');
const bigImage = document.querySelector('#largeImg');

imageUl.addEventListener('click', (ev) => {
  ev.preventDefault();
  bigImage.src = event.target.closest('a').href;
});
