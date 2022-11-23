'use strict';

const gallery = document.querySelector('.gallery');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (events) => {
  const item = events.target;
  const largeImg = gallery.children[0];
  const itemCopy = item.cloneNode(true);

  events.preventDefault();
  largeImg.firstElementChild.remove();
  itemCopy.className = 'gallery__large-img gallery__img';
  largeImg.append(itemCopy);
});
