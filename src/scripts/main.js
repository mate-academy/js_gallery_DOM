'use strict';

const ul = document.querySelector('#thumbs');
const img = document.querySelector('#largeImg');

if (ul && img) {
  ul.addEventListener('click', (e) => {
    e.preventDefault();

    const clickedElemet = e.target;
    const linkElement = clickedElemet.closest('a');

    if (linkElement) {
      const largeImgUrl = linkElement.href;

      img.src = largeImgUrl;
    }
  });
}
