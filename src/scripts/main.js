'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  const href = evt.target.closest('a').getAttribute('href');
  const domain = window.location.origin;

  if (href) {
    largeImg.src = domain + href;
  }
});
