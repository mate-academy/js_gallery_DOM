'use strict';

function main() {
  const mainFrame = document.querySelector('.gallery__large-img');

  const images = document.querySelectorAll('.list-item__link');

  for (const img of images) {
    img.addEventListener('click', () => {
      mainFrame.src = img.href;
    });

    // eslint-disable-next-line no-shadow
    img.parentNode.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }
}

main();
