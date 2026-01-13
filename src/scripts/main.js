'use strict';

const ul = document.querySelector('ul#thumbs');
const image = document.querySelector('img#largeImg');

const clickHandler = (e) => {
  e.preventDefault();

  const linkEll = e.target.closest('a');

  if (linkEll) {
    const link = linkEll.href;

    image.src = link;
  }
};

ul.addEventListener('click', clickHandler);
