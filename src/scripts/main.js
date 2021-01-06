'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

const switcher = (eventNew) => {
  event.preventDefault();

  const newPic = eventNew.target.closest('.list-item__link');

  if (!newPic) {
    return;
  }

  largeImg.src = newPic.href;
  largeImg.alt = newPic.alt;
};

gallery.addEventListener('click', switcher);
