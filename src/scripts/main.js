'use strict';

const gallary = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__img');

const callback = (events) => {
  const img = events.target.closest('img');

  if (!img) {
    return;
  }

  const link = img.closest('a');

  if (!link) {
    return;
  }

  event.preventDefault();

  bigImg.src = link.href;
};

gallary.addEventListener('click', callback);
