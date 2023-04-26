'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = [...document.querySelectorAll('.list-item__link')];

gallery.forEach((img, index) => {
  img.addEventListener('click', (evt) => {
    evt.preventDefault();
    largeImg.src = img.href;
  });
});

largeImg.addEventListener('click', () => {
  let imgPosition = 0;

  for (let i = 0; i < gallery.length; i++) {
    if (largeImg.src === gallery[i].href && i !== gallery.length - 1) {
      imgPosition = i + 1;
    }
  }

  largeImg.src = gallery[imgPosition].href;
});
