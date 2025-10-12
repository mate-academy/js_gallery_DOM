'use strict';

const bigImage = document.querySelector('#largeImg');
const container = document.querySelector('.gallery__list');

container.addEventListener('click', (events) => {
  const link = events.target.closest('a');

  if (!link) {
    return;
  }

  events.preventDefault();
  bigImage.src = link.href;

  const thumbImg =
    events.target.tagName === 'IMG' ? events.target : link.querySelector('img');

  bigImage.alt = thumbImg ? thumbImg.alt : link.title || '';
});
