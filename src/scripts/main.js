'use strict';

const urlsList = document.querySelectorAll('a');
const imageToChange = document.querySelector('#largeImg');

for (const url of urlsList) {
  const imageElement = url.querySelector('img');

  url.addEventListener('click', (defaultEvent) => {
    imageToChange.src = imageElement.src;
    defaultEvent.preventDefault();
  });
}
