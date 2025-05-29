'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('ul');

list.addEventListener('click', (action) => {
  const link = action.target.closest('a');

  if (link) {
    action.preventDefault();

    mainImg.src = link.href;
  }
});
