'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (events) => {
  const picture = events.target.closest('a');

  showPicture(picture.href, picture.title);
  events.preventDefault();
});

function showPicture(href, title) {
  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = href;
  largeImg.alt = title;
}
