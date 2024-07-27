'use strict';

const elements = [...document.getElementsByTagName('a')];
const largeImage = document.getElementById('largeImg');

elements.forEach((el) => {
  el.addEventListener('click', (currEvent) => {
    currEvent.preventDefault();
    largeImage.src = el.href;
  });
});
