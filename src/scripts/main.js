'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('mouseover', (e) => {
  const img = e.target.closest('.gallery__thumb');

  if (!img) {
    return;
  }

  img.style.outline = '1px solid lightgray';
});

thumbs.addEventListener('mouseout', (e) => {
  const img = e.target.closest('.gallery__thumb');

  if (!img) {
    return;
  }

  img.style.outline = 'none';
});

thumbs.addEventListener('click', (e) => {
  const bigImg = document.querySelector('.gallery__large-img');
  const img = e.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  e.preventDefault();
  bigImg.src = img.href;
});
