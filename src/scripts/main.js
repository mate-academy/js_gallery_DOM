'use strict';

const mainImg = document.getElementById('largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (eve) => {
  const link = event.target.closest('img');

  eve.preventDefault();

  if (!link) {
    return;
  }

  const savedLink =
    './images' + link.getAttribute('src').split('-thumb')[0] + '.png';

  mainImg.setAttribute('src', savedLink);
});
