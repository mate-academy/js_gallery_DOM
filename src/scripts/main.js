'use strict';

const thumbs = document.querySelector('#thumbs');
const thumbLinks = thumbs.querySelectorAll('a');
const imageMain = document.querySelector('#largeImg');

for (const thumbLink of thumbLinks) {
  thumbLink.addEventListener('click', (e) => {
    const imageSrc = e.currentTarget.href;

    imageMain.src = imageSrc;
    e.preventDefault();
  });
}
