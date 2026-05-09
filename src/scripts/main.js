'use strict';

const thumbsEl = document.querySelector('#thumbs');
const largeImgEl = document.querySelector('#largeImg');

thumbsEl.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (ev.target.tagName === 'A') {
    largeImgEl.src = ev.target.href;
  }

  if (ev.target.tagName === 'IMG') {
    largeImgEl.src = ev.target.parentElement.href;
  }

  if (ev.target.tagName === 'LI') {
    largeImgEl.src = ev.target.querySelector('a').href;
  }
});
