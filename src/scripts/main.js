'use strict';

const imageList = document.querySelectorAll('.list-item');

for (const img of [...imageList]) {
  img.addEventListener('click', (event) => {
    event.preventDefault();

    const photoUrl = img.querySelector('.list-item__link');

    document.getElementById('largeImg').src = `${photoUrl.href}`;
  });
}
