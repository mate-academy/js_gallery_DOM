'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const table = document.querySelector('.gallery__list');

table.addEventListener('click', (action) => {
  const tableItem = action.target;

  action.preventDefault();

  if (tableItem.classList.contains('gallery__thumb')) {
    mainImage.src = tableItem.parentElement.href;
  }
});
