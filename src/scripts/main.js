'use strict';

const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const image = e.target.closest('.list-item__link');
  const large = document.getElementById('largeImg');

  large.src = image.href;
});
