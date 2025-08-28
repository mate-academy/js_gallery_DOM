'use strict';

const mainImage = document.querySelector('#largeImg');
const container = document.querySelector('#thumbs');

container.addEventListener('click', (e) => {
  const picture = e.target.tagName;

  if (picture === 'IMG') {
    mainImage.src = e.target.parentNode.href;
  }

  if (picture === 'A') {
    mainImage.src = e.target.href;
  }
});

const click = document.querySelectorAll('a');

click.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
