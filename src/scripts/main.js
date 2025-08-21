'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  if (target.tagName !== 'A') {
    target = target.closest('a');
  }

  if (target) {
    const hrefAttrValue = target.href;

    largeImg.src = hrefAttrValue;
  }
});
