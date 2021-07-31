'use strict';

const thumbs = document.querySelector('#thumbs');
const rootElement = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const el = e.target.parentElement.href
    || e.target.href;

  rootElement.src = el;
});
