'use strict';

const thumbsList = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

thumbsList.addEventListener('click', (ev) => {
  const imageLink = ev.target.closest('a').href;

  ev.preventDefault();
  largeImage.src = imageLink;
});
