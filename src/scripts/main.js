'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', function (clickEvent) {
  const target = clickEvent.target;

  const link = target.closest('.list-item__link');

  if (!link) {
    return;
  }

  clickEvent.preventDefault();

  const newSrc =
    window.location.protocol +
    '//' +
    window.location.host +
    link.getAttribute('href');

  largeImg.src = newSrc;
});
