'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

const handler = (e) => {
  e.preventDefault();

  const clickedElement = e.target;
  const link = clickedElement.closest('a');

  if (link) {
    const newSrc = link.href;

    largeImg.src = newSrc;
  }
};

thumbs.addEventListener('click', handler);
