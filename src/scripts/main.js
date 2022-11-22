'use strict';

const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  const clickElement = target.closest('.list-item__link');

  if (clickElement) {
    const href = clickElement.href;
    const bigImage = document.getElementById('largeImg');

    bigImage.src = `/images/${href.slice(href.lastIndexOf('/') + 1)}`;
  }
});
