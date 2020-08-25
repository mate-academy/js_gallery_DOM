'use strict';

const listOfA = document.querySelectorAll('a');

for (const keys of listOfA) {
  keys.addEventListener('click', (event) => {
    event.preventDefault();

    const img = document.querySelector('img');

    img.src = keys.href;
  });
}
