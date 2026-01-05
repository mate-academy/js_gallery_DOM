'use strict';

const mainImg = document.getElementById('largeImg');

const li = document.querySelectorAll('ul li');

const arrayLiOfLi = [...li];

for (const item of arrayLiOfLi) {
  item.querySelector('a').addEventListener('click', () => {
    event.preventDefault();
    mainImg.setAttribute('src', item.querySelector('a').getAttribute('href'));
  });
}
