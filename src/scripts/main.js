'use strict';

const linksImages = document.getElementsByClassName('list-item__link');

for (const link of linksImages) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.getElementById('largeImg').src = link.href;
  });
}
