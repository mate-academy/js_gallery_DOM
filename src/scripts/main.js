'use strict';

const bigImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

const thumbHandler = (e) => {
  const link = e.target.closest('a.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  bigImg.src = link.href;
};

thumbs.addEventListener('click', thumbHandler);
