'use strict';

let count = 0;

const picture = ['landscape-fifth-thumb.jpeg'];

picture.push('landscape-fifth.png');
picture.push('landscape-first-thumb.jpeg');
picture.push('landscape-first.png');
picture.push('landscape-fourth-thumb.jpeg');
picture.push('landscape-fourth.png');
picture.push('landscape-second-thumb.jpeg');
picture.push('landscape-second.png');
picture.push('landscape-third-thumb.jpeg');
picture.push('landscape-third.png');

const img = document.querySelector('img');
const link = document.querySelector('a');

img.addEventListener('click', () => {
  count++;

  if (count === 10) {
    count = 0;
  }

  img.src = picture[count];
});

link.addEventListener('click', () => {
  count++;

  if (count === 10) {
    count = 0;
  }

  img.src = picture[count];
});
