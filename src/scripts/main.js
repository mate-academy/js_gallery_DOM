'use strict';

const bigImg = document.querySelector('.gallery__large-img');

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();

  const href = link.getAttribute('href');
  const a = document.createElement('a');

  a.href = href;

  const abs = a.href;

  bigImg.src = abs;
});
