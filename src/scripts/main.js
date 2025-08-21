'use strict';

const imgListBlock = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

imgListBlock.addEventListener('click', (item) => {
  item.preventDefault();

  let link;

  if (item.target.tagName === 'IMG') {
    link = item.target.closest('a');
  } else if (item.target.tagName === 'A') {
    link = item.target;
  }

  if (link) {
    const hrefVal = link.getAttribute('href');

    mainImg.src = hrefVal;
  }
});
