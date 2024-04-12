'use strict';

const gallery = document.querySelector('div.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.tagName === 'IMG' ? e.target.parentNode : e.target;

  const href = target.getAttribute('href');

  largeImg.setAttribute('src', href);
});
