'use strict';

const item = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

item.addEventListener('click', (eventObj) => {
  eventObj.preventDefault();

  if (eventObj.target.class === 'gallery__thumb') {
    mainImg.setAttribute('src', eventObj.target.parentElement.href);
  } else if (eventObj.target.class === 'list-item__link') {
    mainImg.setAttribute('src', eventObj.target.href);
  }
});
