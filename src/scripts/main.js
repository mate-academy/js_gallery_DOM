'use strict';

const nav = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
nav.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (link && link.getAttribute('href')) {
    largeImg.src = `http://localhost:3001${link.getAttribute('href')}`;
  }

  // console.log(event, event.currentTarget.tagName, event.target.tagName);
  // console.log(link, link.getAttribute('href'));
  // console.log(largeImg.src);
});
