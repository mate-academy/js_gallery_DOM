'use strict';

const thumbs = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  mainImage.setAttribute(
    'src',
    new URL(link.getAttribute('href'), location.origin).href,
  );
});
