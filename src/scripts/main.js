'use strict';

const largeImg = document.querySelector('#largeImg');

const linkImg1 = document.querySelector('[title="Image 1"]');
const linkImg2 = document.querySelector('[title="Image 2"]');
const linkImg3 = document.querySelector('[title="Image 3"]');
const linkImg4 = document.querySelector('[title="Image 4"]');
const linkImg5 = document.querySelector('[title="Image 5"]');

linkImg1.addEventListener('click', () => {
  largeImg.src = './images/landscape-first.png';
  linkImg1.href = '#';
});

linkImg2.addEventListener('click', () => {
  largeImg.src = './images/landscape-second.png';
  linkImg2.href = '#';
});

linkImg3.addEventListener('click', () => {
  largeImg.src = './images/landscape-third.png';
  linkImg3.href = '#';
});

linkImg4.addEventListener('click', () => {
  largeImg.src = './images/landscape-fourth.png';
  linkImg4.href = '#';
});

linkImg5.addEventListener('click', () => {
  largeImg.src = './images/landscape-fifth.png';
  linkImg5.href = '#';
});
