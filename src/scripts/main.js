'use strict';

const thumbs = document.querySelector('#thumbs');
const rootElement = document.querySelector('.gallery').children[0].children[0];

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const el = e.target.parentElement.pathname
    || e.target.pathname;

  rootElement.src = 'http://localhost:8080' + el;
});
