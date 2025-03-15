'use strict';

const imgThumbCollection = document.querySelectorAll('.list-item');
const largeImg = document.getElementById('largeImg');

imgThumbCollection.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.setAttribute('src', e.currentTarget.children[0].href);
  });
});
