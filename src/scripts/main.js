'use strict';

const container = document.querySelector('#thumbs');

container.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('.list-item__link');
  const largeImg = document.getElementById('largeImg');
  const relativeSrc = link.href;

  largeImg.src = relativeSrc;
});
