'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' && target.classList.contains('gallery__thumb')) {
    const link = target.closest('a');
    const newSrc = link.getAttribute('href');

    largeImg.src = newSrc;

    largeImg.onload = () => {
      const aspectRatio = largeImg.naturalWidth / largeImg.naturalHeight;

      largeImg.style.height = `${largeImg.offsetWidth / aspectRatio}px`;
    };
  }
});
