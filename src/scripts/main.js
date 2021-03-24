'use strict';

const imagesList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

imagesList.addEventListener('click', (ev) => {
  ev.preventDefault();

  largeImg.setAttribute('src', ev.target.parentElement.getAttribute('href'));
});
