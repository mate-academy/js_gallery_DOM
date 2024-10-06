/* eslint-disable no-shadow */
'use strict';

const largImg = document.querySelector('#largeImg');
const imgLinks = [...document.querySelectorAll('a')];

imgLinks.forEach((link) => {
  const src = link.attributes.href.value;

  link.onclick = (event) => {
    event.preventDefault();
    largImg.setAttribute('src', src);
  };
});
