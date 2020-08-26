'use strict';

const list = document.querySelector('ul');
const mainPicture = document.getElementById('largeImg');

const getBigPicture = (event) => {
  event.preventDefault();

  const item = event.target.closest('a');

  if (!item || !list.contains(item)) {
    return;
  }

  mainPicture.src = item;
};

list.addEventListener('click', getBigPicture);
