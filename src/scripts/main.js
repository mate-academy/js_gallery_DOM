'use strict';

const container = document.querySelector('.gallery__list');

container.addEventListener(
  'click',
  (eventTarget) => {
    const targetListItem = eventTarget.target.closest('li');

    if (!targetListItem) {
      return;
    }

    if (!container.contains(targetListItem)) {
      return;
    }

    const targetLink = targetListItem.querySelector('a');

    if (targetLink) {
      eventTarget.preventDefault();
    }

    const source = targetLink.href;

    changeBigImage(source);
  },
  { capture: true },
);

function changeBigImage(image) {
  const newImage = document.querySelector('.gallery__large-img');

  newImage.src = image;
}
