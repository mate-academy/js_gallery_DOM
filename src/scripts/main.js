'use strict';

const gallery = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (click) => {
  click.preventDefault();

  const target = click.target;
  const link = target.closest('a');

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
