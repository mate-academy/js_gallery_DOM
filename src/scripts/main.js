'use strict';

const largeImg = document.getElementById('largeImg');
const minImg = document.querySelectorAll('a');
const minImgArr = [...minImg];

minImgArr.forEach((item, i) => {
  minImg[i].addEventListener('click', (ev) => {
    largeImg.src = item.getAttribute('href');
    ev.preventDefault();
  });
});
