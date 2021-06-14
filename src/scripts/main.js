'use strict';

const ul = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

ul.onclick = function(events) {
  const target = events.target.closest('a');

  if (!target) {
    return;
  }
  largeImg.src = target.href;
  events.preventDefault();
};
