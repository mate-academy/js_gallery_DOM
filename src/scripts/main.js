'use strict';

const container = document.querySelector('.gallery__list');
const mainImage = document.querySelector('#largeImg');

container.addEventListener('click', (e) => {
  const image = e.target.closest('img');
  const link = e.target.closest('a');

  if (!image && !link) {
    return;
  }

  if (link) {
    e.preventDefault();
  }

  const newSrc = link
    ? link.getAttribute('href')
    : e.target.getAttribute('data-full') || e.target.src;

  mainImage.src = 'http://localhost:3001' + newSrc;
});
