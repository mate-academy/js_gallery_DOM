'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.querySelector(
    '.gallery__main img, .main-image img, .preview img, #main img, #main',
  );
  const thumbs = document.querySelector(
    '.gallery__thumbs, .thumbnails, .gallery, .thumbs, .images',
  );

  // eslint-disable-next-line curly
  if (!mainImg || !thumbs) return;

  thumbs.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    const link = e.target.closest('a');

    // eslint-disable-next-line curly
    if (!img && !link) return;

    // eslint-disable-next-line curly
    if (link) e.preventDefault();

    // eslint-disable-next-line max-len, prettier/prettier
    const bigSrc = (link && link.getAttribute('href')) || img?.getAttribute('src');

    // eslint-disable-next-line curly
    if (!bigSrc) return;

    const alt = img?.getAttribute('alt') || '';

    mainImg.setAttribute('src', bigSrc);
    // eslint-disable-next-line curly
    if (alt) mainImg.setAttribute('alt', alt);

    // прибираємо старий .is-active
    // eslint-disable-next-line max-len, prettier/prettier
    thumbs.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));

    // додаємо на клікнуте
    (img || link).classList.add('is-active');
  });
});
