'use strict';

const list = document.querySelector('ul');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const imagePreview = event.target.closest('.list-item');

  if (!imagePreview || !list.contains(imagePreview)) {
    return;
  };
  largeImage.src = imagePreview.children[0].href;
});
