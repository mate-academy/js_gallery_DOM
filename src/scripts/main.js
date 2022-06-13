'use strict';

const large = document.getElementById('largeImg');
const thumbs = document.querySelectorAll('.gallery__img');

for (let smallPic of thumbs) {
  smallPic.addEventListener('click', (event) => {
    event.preventDefault();
    large.src = smallPic.src;
  });

  // smallPic.onclick = (event) => {
  //   event.preventDefault();
  //   large.src = smallPic.src;
  // };
}
