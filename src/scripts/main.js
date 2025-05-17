'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

// Призначаємо обробник лише один раз
largeImg.style.width = '100%'; // або в пікселях, якщо потрібно

const aspectRatio = largeImg.naturalWidth / largeImg.naturalHeight;
const computedWidth = largeImg.getBoundingClientRect().width;

largeImg.style.height = `${computedWidth / aspectRatio}px`;

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' && target.classList.contains('gallery__thumb')) {
    const link = target.closest('a');
    const newSrc = link.getAttribute('href');

    // Тільки змінюємо src — onload вже призначено
    largeImg.src = newSrc;
  }
});
