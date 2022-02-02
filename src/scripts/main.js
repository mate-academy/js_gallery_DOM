'use strict';

const gallery = document.querySelector('.gallery');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  const picture = evt.target.closest('.list-item');

  if (!picture) {
    return;
  }

  gallery.children[0].children[0].src = picture.children[0].href;
});
