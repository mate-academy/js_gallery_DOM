'use strict';

const gallary = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__img');

const callback = (events) => {
  const link = events.target.closest('a');

  if (!link) {
    return;
  }

  events.preventDefault();

  bigImg.src = link.href;
};

gallary.addEventListener('click', callback);
