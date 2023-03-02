'use strict';

// debugger;

const largeImg = document.getElementById('largeImg');

// const srcLargeImg = largeImg.getAttribute('src');

// const linksListItem = document.querySelectorAll('.list-item__link');
const imgesListItem = document.querySelectorAll('.gallery__img');

for (const img of imgesListItem) {
  img.addEventListener('click', (e) => {
    e.preventDefault();

    const srcObject = img.getAttribute('src');

    largeImg.setAttribute('src', srcObject);
    largeImg.style.height = '348px';
  });
}
