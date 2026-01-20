'use strict';

document.querySelector('.gallery__list').addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();

    const imageLink = link.href;
    const imageAlt = link.querySelector('img').getAttribute('alt');
    const mainImage = document.querySelector('#largeImg');

    mainImage.setAttribute('src', imageLink);
    mainImage.setAttribute('alt', imageAlt);
  }
});
