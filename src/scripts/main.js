'use strict';

const gallery = document.querySelector('.gallery');

const changeImage = (eventElement) => {
  const thumb = eventElement.target.closest('.gallery__thumb');

  if(!thumb) {

    eventElement.preventDefault();
    const largePrevious = document.querySelector('.gallery__large-img');

    largePrevious.src = eventElement.target.src;
  } else {
    return;
  }
};

gallery.addEventListener('click', changeImage);
