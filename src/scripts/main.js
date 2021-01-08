'use strict';

const gallary = document.querySelector('.gallery');
const langePhoto = document.querySelector('.gallery__large-img');

gallary.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target;

  clickEvent.preventDefault();

  if (target.className === 'list-item__link') {
    langePhoto.src = target.href;

    return;
  }

  langePhoto.src = target.src;
});
