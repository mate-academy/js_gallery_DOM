/* eslint-disable no-shadow */
'use strict';

const list = document.getElementById('thumbs');

function showImage(event) {
  event.preventDefault();

  const targetLink = event.target.closest('.list-item__link');
  const largeImage = document.querySelector('#largeImg');

  if (!targetLink) {
    return;
  }

  largeImage.src = targetLink.href;
};

list.addEventListener('click', showImage);
