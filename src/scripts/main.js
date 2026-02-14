'use strict';

const gallery = document.querySelector('.gallery');
const galleryList = gallery.querySelector('.gallery__list');
const listItems = galleryList.querySelectorAll('.list-item');
const largeImg = gallery.querySelector('.gallery__large-img');

const galleryEvent = (e) => {
  e.preventDefault();

  const chosenLink = e.target.closest('a');

  largeImg.src = chosenLink.href;
};

[...listItems].forEach((item) => {
  setEvent(item.querySelector('img'));
});

function setEvent(element) {
  element.addEventListener('click', galleryEvent);
}
