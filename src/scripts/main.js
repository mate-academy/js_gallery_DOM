'use strict';

const img = document.getElementById('largeImg');

const imgs = document.getElementsByClassName('list-item__link');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', (target) => {
    target.preventDefault();

    img.src = imgs[i].href;
  });
}
