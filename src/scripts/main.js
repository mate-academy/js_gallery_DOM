'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (element) => {
  element.preventDefault();

  const target = element.target;

  if (target.tagName === 'IMG') {
    largeImg.src = target.parentNode.href;
  }
});
