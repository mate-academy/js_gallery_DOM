'use strict';

const listOfLinks = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

// eslint-disable-next-line no-shadow
listOfLinks.addEventListener('click', (event) => {
  const itemLink = event.target.closest('.list-item__link');
  const itemImg = event.target.closest('.gallery__thumb');

  event.preventDefault();

  if (itemLink || itemImg) {
    const linkSrc = itemLink.getAttribute('href');

    mainImg.setAttribute('src', linkSrc);
  }
});
