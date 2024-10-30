'use strict';

const mainImage = document.getElementById('largeImg');

const allLinks = document.getElementsByTagName('a');

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener('click', (ev) => {
    if (ev.target.tagName === 'IMG') {
      ev.preventDefault();

      const parentElement = ev.target.parentElement;

      mainImage.src = parentElement.href;
    }
  });
}
