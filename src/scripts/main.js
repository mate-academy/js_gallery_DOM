'use strict';

const mainPic = document.querySelector('.gallery__large-img');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  const previewLink = item.querySelector('a');

  mainPic.src = previewLink.href;
});
