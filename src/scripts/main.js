'use strict';

const largeImage = document.querySelector('#largeImg');
const imagesList = document.querySelector('#thumbs');

function onClickHandler(ev) {
  ev.preventDefault();

  const item = ev.target.closest('a');

  if (!item || !imagesList.contains(item)) {
    return;
  };

  const link = item.href;

  largeImage.setAttribute('src', `${link}`);
}

imagesList.addEventListener('click', onClickHandler);
