'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', ev => {
  ev.preventDefault();

  let target = ev.target;

  if (target.tagName !== 'IMG' && target.tagName !== 'A') {
    return;
  }

  if (target.tagName === 'A') {
    target = target.children[0];
  }

  const srcParts = target.src.replace('-thumb', '').split('landscape');
  const imageTitle = `landscape${srcParts[1].split('.')[0]}`;

  largeImg.src = srcParts[0] === 'http://localhost:8080/'
    ? `${srcParts[0]}images/${imageTitle}.png`
    : `./images/${imageTitle}.png`;
});
