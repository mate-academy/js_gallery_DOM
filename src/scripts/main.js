'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const list = document.getElementById('thumbs');

list.addEventListener('click', (action) => {
  action.preventDefault();

  largeImage.src = action.target.closest('.list-item__link').href;
});
