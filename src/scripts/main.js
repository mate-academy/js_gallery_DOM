'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  let target = ev.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName !== 'A') {
    return;
  }

  const relativeSrc = target.getAttribute('href');

  const fullUrl = window.location.origin + relativeSrc;

  mainImage.setAttribute('src', fullUrl);
});
