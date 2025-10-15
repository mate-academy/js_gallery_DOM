'use strict';

const bigImage = document.querySelector('#largeImg');
const container = document.querySelector('.gallery__list');

if (container && bigImage) {
  container.addEventListener('click', (events) => {
    const link = events.target.closest('a');

    if (!link) {
      return;
    }

    events.preventDefault();

    const href = link.getAttribute('href');

    const thumbImg =
      events.target.tagName === 'IMG'
        ? events.target
        : link.querySelector('img');

    bigImage.alt = thumbImg?.alt || link.title || '';
    bigImage.setAttribute('src', href);
  });
}
