'use strict';

const mainImg = document.getElementById('largeImg');

const thumbs = [...document.getElementById('thumbs').children];

thumbs.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const imgSrc = item.querySelector('a').href;

    mainImg.src = imgSrc;
  });
});
