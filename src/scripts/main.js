'use strict';

const largeImg = document.getElementById('largeImg');

const ul = document.getElementById('thumbs');

ul.addEventListener('click', (e) => {
  // e.preventDefault();
  // const link = e.target.closest('a');
  // if (!link) {
  //   return;
  // }
  // largeImg.setAttribute('src', link.href);

  const link = e.target.closest('.list-item__link');

  e.preventDefault();

  largeImg.setAttribute('src', link.href);
});
