'use strict';

const $linkList = document.querySelector('ul.gallery__list');
const $mainImage = document.querySelector('img.gallery__large-img');

$linkList.addEventListener('click', (e) => {
  e.preventDefault();

  const $imageLink = e.target.closest('a.list-item__link');

  if (!$imageLink) {
    return;
  }

  const mainImageLink = $imageLink.href;

  $mainImage.setAttribute('src', mainImageLink);
});
