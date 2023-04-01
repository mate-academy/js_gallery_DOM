'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', function(clickEvent) {
  const link = clickEvent.target.closest('a');

  largeImage.src = link.href;

  clickEvent.preventDefault();
});
