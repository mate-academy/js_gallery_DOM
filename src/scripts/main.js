'use strict';

const thumbs = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

function handleClick(ev) {
  ev.preventDefault();

  const linkOfImage = ev.target.closest('a').getAttribute('href');

  const baseUrl = window.location.origin;

  largeImage.setAttribute('src', baseUrl + linkOfImage);
}

thumbs.addEventListener('click', handleClick);
