'use strict';

const large = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

const final = (ev) => {
  ev.preventDefault();

  const imgToAdd = ev.target.closest('.list-item__link');

  if (!imgToAdd) {
    return;
  }

  large.src = imgToAdd.href;
  large.alt = imgToAdd.alt;
};

gallery.addEventListener('click', final);
