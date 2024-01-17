'use strict';

const ul = document.querySelector('ul');
const img = document.querySelector('#largeImg');
const eventName = 'click';

const handleClick = (ev) => {
  ev.preventDefault();

  if (ev.target.tagName === 'IMG') {
    img.src = ev.target.src;
    img.style.height = '348px';
  }
};

ul.addEventListener(eventName, handleClick);
