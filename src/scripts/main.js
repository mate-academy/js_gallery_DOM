'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (evn) => {
  const target = evn.target;

  evn.preventDefault();

  if (target.tagName === 'A') {
    largeImg.src = target.href;
  } else if (target.tagName === 'IMG') {
    largeImg.src = target.parentNode.href;
  }
});
