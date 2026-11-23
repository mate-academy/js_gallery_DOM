'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (ev) => {
  let link;

  if (ev.target.tagName === 'IMG') {
    link = ev.target.parentElement;
  } else if (ev.target.tagName === 'A') {
    link = ev.target;
  } else {
    return;
  }

  ev.preventDefault();

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
