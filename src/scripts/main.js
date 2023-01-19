'use strict';

const root = document.querySelector('.gallery');
const largeImg = root.querySelector('#largeImg');
const galleryList = root.querySelector('.gallery__list');
const links = root.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
}

galleryList.addEventListener('click', (e) => {
  if (!e.target.matches('.gallery__thumb')) {
    return;
  }

  const listLink = e.target.closest('.list-item__link');
  const listItemSrc = listLink.getAttribute('href');

  largeImg.setAttribute('src', listItemSrc);
});
