'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', onThumbClick);

function onThumbClick(click) {
  const link = click.target.closest('a');

  if (!link) {
    return;
  }

  click.preventDefault();

  largeImg.src = link.href;
  largeImg.alt = link.title;
}
