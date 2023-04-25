'use strict';

const largeImage = document.getElementById('largeImg');
const listImage = document.getElementById('thumbs');

listImage.addEventListener('click', (e) => {
  largeImage.src = e.target.src;
});

for (const link of document.querySelectorAll('.list-item__link')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
}
