'use strict';

const root = document.querySelector('.gallery');
const largeImg = root.querySelector('#largeImg');
const galleryList = root.querySelector('.gallery__list');
const links = root.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', function(event_) {
    event_.preventDefault();
  });
}

galleryList.addEventListener('click', (event_) => {
  if (!event_.target.matches('.gallery__thumb')) {
    return;
  }

  const listLink = event_.target.closest('.list-item__link');
  const listItemSrc = listLink.getAttribute('href');

  largeImg.setAttribute('src', listItemSrc);
});
