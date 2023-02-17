'use strict';

const list = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', showPhoto);

function showPhoto(events) {
  events.preventDefault();
  largeImage.src = events.target.parentElement.href;
}
