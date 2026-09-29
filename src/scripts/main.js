'use strict';

const image = document.querySelector('ul');
const mainImg = document.querySelector('.gallery__large-img');

image.addEventListener('click', (events) => {
  events.preventDefault();

  const elem = events.target.closest('a');

  if (!elem) {
    return;
  }
  mainImg.setAttribute('src', elem.href);
});
