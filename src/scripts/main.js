'use strict';

function makeReplaceImage(id) {
  const largeImage = document.getElementById(id);

  return ev => {
    ev.preventDefault();

    let element = ev.target;

    while (element.tagName !== 'A') {
      element = element.parentNode;

      if (!element) {
        throw new Error('not inside "a" tag');
      }
    }

    largeImage.setAttribute('src', element.href);
  };
}

const replaceImage = makeReplaceImage('largeImg');

document
  .getElementById('thumbs')
  .querySelectorAll('a, img')
  .forEach(el => el.addEventListener('click', replaceImage));
