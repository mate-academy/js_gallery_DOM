'use strict';

const centralFrame = document.querySelector('.gallery__large-img');
const images = document.querySelectorAll('.list-item__link');

for (const image of images) {
  image.addEventListener('click', (events) => {
    const img = image.firstElementChild;

    if (events.target === img || events.target === image) {
      events.preventDefault();
    }

    const item = events.target;

    if (!item.classList.contains('gallery__thumb')) {
      return;
    }

    centralFrame.src = image.href;
  });
}
