'use strict';

const mainImage = document.querySelector('#largeImg');

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (happening) => {
  const item = happening.target.closest('a');

  if (!item) {
    return;
  };

  event.preventDefault();

  mainImage.src = item.href;
  mainImage.alt = item.title;
});
