'use strict';

const thumbs = document.querySelector('#thumbs');
const rootElement = document.querySelector('.gallery').children[0].children[0];
// console.dir(rootElement);

thumbs.addEventListener('click', (e) => {
  e.preventDefault();
  // console.dir(e.target.parentElement);

  const el = e.target.parentElement.pathname
    || e.target.pathname;

  const imageSrc = el.split('/').reverse()[0];
  const tempSrc = rootElement.src.split('/');

  tempSrc[tempSrc.length - 1] = imageSrc;
  rootElement.src = tempSrc.join('/');
});
