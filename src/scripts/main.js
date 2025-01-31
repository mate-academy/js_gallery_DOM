'use strict';

const largeImg = document.getElementById('largeImg');
const imgs = document.getElementsByTagName('a');

for (const img of imgs) {
  img.addEventListener('click', function (event1) {
    event1.preventDefault();

    if (this.hasAttribute('title')) {
      largeImg.src = this.href;
      largeImg.alt = this.title;
    }
  });
}
