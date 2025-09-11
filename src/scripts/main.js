'use strict';

const mainImage = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

if (mainImage && galleryList) {
  galleryList.addEventListener('click', (e) => {
    const link = e.target.closest('a, .list-item__link');

    if (!link && !galleryList.contains(link)) {
      return;
    }
    e.preventDefault();

    const href = link.getAttribute('href');

    if (href) {
      mainImage.src = href;
    }

    const thumbImg =
      e.target.tagName === 'IMG' ? e.target : link.querySelector('img');

    mainImage.alt = (thumbImg && thumbImg.getAttribute('alt')) || '';
  });
}
