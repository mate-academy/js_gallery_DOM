'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('ul');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  let link;

  if (ev.target.tagName === 'IMG') {
    link = ev.target.parentElement;
  } else if (ev.target.tagName === 'A') {
    link = ev.target;
  } else {
    return;
  }

  largeImg.src = link.href;
});
