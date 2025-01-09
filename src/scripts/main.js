'use strict';

const largeImage = document.getElementById('largeImg');
const thumbNail = document.getElementById('thumbs');

thumbNail.addEventListener('click', (ev) => {
  if (ev.target.tagName.toLowerCase() === 'img') {
    const imgLink = ev.target.closest('a');

    ev.preventDefault();

    largeImage.src = imgLink.href;
  }
});
