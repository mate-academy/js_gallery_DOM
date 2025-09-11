'use strict';

const mainImage = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

if (mainImage && galleryList) {
  galleryList.addEventListener('click', (e) => {
    const target = e.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest('a, a.list-item__link');

    if (!link || !galleryList.contains(link)) {
      return;
    }

    if (link.matches('a')) {
      e.preventDefault();
    }

    const href = link.getAttribute('href');

    if (href) {
      mainImage.src = href;
    }

    const isImg = target.tagName === 'IMG';
    const thumbImg = isImg ? target : link.querySelector('img');

    mainImage.alt = (thumbImg && thumbImg.getAttribute('alt')) || '';
  });
}
