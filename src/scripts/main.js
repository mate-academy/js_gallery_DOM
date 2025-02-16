'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const largeImg = document.querySelector('.gallery__large-img');
  const thumbs = document.querySelector('.gallery__list');

  thumbs.addEventListener('click', (events) => {
    const link = events.target.closest('.list-item__link');

    if (!link) {
      return;
    }

    events.preventDefault();
    largeImg.src = link.href;
  });
});
