'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const allImg = document.querySelector('.gallery__list');

allImg.addEventListener('click', function(events) {
  events.preventDefault();

  if (events.target.tagName === 'IMG') {
    mainImg.src = events.target.parentElement.href;
  }

  if (events.target.tagName === 'A') {
    mainImg.src = events.target.href;
  }
});
