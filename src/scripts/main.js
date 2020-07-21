'use strict';

const list = document.getElementById('thumbs');

list.addEventListener('click', (event) => {
  const target = event.target.closest('.list-item');
  const link = target.querySelector('.list-item__link');
  const newSrc = link.href;

  if (!target || !list.contains(link)) {
    return;
  }

  event.preventDefault();
  document.getElementById('largeImg').src = newSrc;
});
