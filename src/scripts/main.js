'use strict';

const imageLarge = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (ev) => {
  const thumbsLink = ev.target.closest('a');

  ev.preventDefault();

  const newSrc = thumbsLink.href;
  const newAlt = thumbsLink.getAttribute('title');

  imageLarge.src = newSrc;
  imageLarge.setAttribute('alt', newAlt);
});
