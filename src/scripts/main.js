'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (events) => {
  if (
    events.target.className !== 'gallery__img gallery__thumb'
    && events.target.className !== 'list-item__link'
  ) {
    return;
  }

  events.preventDefault();
  document.querySelector('#largeImg').src = events.target.closest('a').href;
});
