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

  const srcParts = target.src.replace('-thumb', '')
    .split('.')[0].split('/');

  const src = `${srcParts[0]}//${srcParts[2]}/images/${srcParts[3]}.png`;

  largeImg.src = src;
});
