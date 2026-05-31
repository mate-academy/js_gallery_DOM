'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('a');

  if (!linkElement) {
    return;
  }

  const linkElHRef = e.target.closest('a').href;

  linkElement.setAttribute('data-link', linkElHRef);

  largeImg.src = linkElement.getAttribute('data-link');
});
