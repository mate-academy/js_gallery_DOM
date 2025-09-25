'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');

if (gallery && mainImg) {
  gallery.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link || !gallery.contains(link)) {
      return;
    }

    e.preventDefault();

    const thumbImg = link.querySelector('img');

    mainImg.setAttribute(
      'alt',
      thumbImg ? thumbImg.getAttribute('alt') || '' : '',
    );

    const href = link.getAttribute('href') || '';
    const path = /^https?:\/\//i.test(href) ? new URL(href).pathname : href;

    mainImg.setAttribute('src', path);
  });
}
