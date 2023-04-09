'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (item) => {
  item.preventDefault();

  const target = item.target;

  if (target.tagName === 'IMG') {
    largeImg.src = target.parentNode.href;
  }
});
