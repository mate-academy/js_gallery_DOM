'use strict';

const mainImage = document.querySelector('#largeImg');
const arrayOfLinks = document.querySelectorAll('.list-item__link');

arrayOfLinks.forEach((link) => {
  link.addEventListener('click', clickHandler);

  const img = link.querySelector('img');

  if (img) {
    img.addEventListener('click', clickHandler);
  }
});

function clickHandler(ev) {
  ev.preventDefault();

  const link = ev.currentTarget.closest('.list-item__link');

  const srcValue = toAbsoluteUrl(link.getAttribute('href'));

  mainImage.setAttribute('src', srcValue);
}

function toAbsoluteUrl(relativePath) {
  const a = document.createElement('a');

  a.href = relativePath;

  return a.href;
}
