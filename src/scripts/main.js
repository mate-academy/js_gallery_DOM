'use strict';

const gallery = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (click) => {
  const target = click.target.closest('.list-item');
  const img = target.children[0];

  gallery.src = img.href;
});
