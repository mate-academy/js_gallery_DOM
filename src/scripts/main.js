'use strict';

const bigImage = document.querySelector('#largeImg');
const items = document.querySelector('#thumbs');

items.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const item = clickEvent.target.closest('.list-item__link');

  if (!item || !items.contains(item)) {
    return;
  }

  const imgWay = '.' + item.attributes.href.nodeValue;

  bigImage.attributes.src.nodeValue = imgWay;
});
