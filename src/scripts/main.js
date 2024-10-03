'use strict';

const getGallery = document.querySelector('.gallery');

// eslint-disable-next-line no-shadow
getGallery.addEventListener('click', function (event) {
  // Перевіряємо, чи клацнули на елемент посилання
  const target = event.target.closest('.list-item__link');

  if (target) {
    event.preventDefault();

    const mainImage = document.querySelector('#largeImg');
    const getSrcTarget = target.getAttribute('href');

    mainImage.src = getSrcTarget;
    mainImage.alt = target.title;
  }
});
