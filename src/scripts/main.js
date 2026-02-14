'use strict';

const gallery = document.querySelector('.gallery');
const galleryList = gallery.querySelector('.gallery__list');
const largeImg = gallery.querySelector('.gallery__large-img');

const galleryEvent = (e) => {
  const chosenLink = e.target.closest('a');

  if (!chosenLink) {
    return;
  }

  e.preventDefault();

  largeImg.src = chosenLink.href;
};

galleryList.addEventListener('click', galleryEvent);
