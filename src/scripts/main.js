'use strict';

const item = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

item.addEventListener('click', (eventObj) => {
  const link = eventObj.target.closest('a');

  eventObj.preventDefault();

  if (link) {
    mainImg.setAttribute('src', eventObj.target.parentElement.href);
  } else {
    return null;
  }
});
