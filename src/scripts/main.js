'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  e.preventDefault();

  const hrefAttrValue = target.href;

  largeImg.src = hrefAttrValue;
});
