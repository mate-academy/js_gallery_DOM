'use strict';

const thumbsLinks = [...document.querySelector('#thumbs')
  .querySelectorAll('a')];

thumbsLinks.forEach(a => a.addEventListener('click', (eventt, target) => {
  eventt.preventDefault();

  document.querySelector('#largeImg').src = eventt.path[1].href;
}));
