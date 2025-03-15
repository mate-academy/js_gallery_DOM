'use strict';

const image = document.querySelector('img#largeImg');
const thumbs = document.querySelector('ul#thumbs');

const handleClick = (e) => {
  e.preventDefault();

  const link = e.target.closest('a').href;

  image.src = link;
}

thumbs.addEventListener('click', handleClick);
