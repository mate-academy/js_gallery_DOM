'use strict';

const mainImage = document.querySelector('img[alt="main image"]');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', function (e) {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  e.preventDefault();
  mainImage.src = link.href;
});
