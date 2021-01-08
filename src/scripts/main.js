'use strict';

const gallary = document.querySelector('.gallery');
const langePhoto = document.querySelector('.gallery__large-img');

gallary.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target.closest('.list-item__link');

  clickEvent.preventDefault();

  if (!target || !gallary.contains(target)) {
    return;
  }

  langePhoto.src = target.href;
});
