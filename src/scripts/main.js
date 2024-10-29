'use strict';

const imageMain = document.getElementById('largeImg');

const slideList = document.getElementById('thumbs');

slideList.addEventListener('click', (e) => {
  const element = e.target;

  e.preventDefault();

  const prevElement = element.parentElement;

  const href = prevElement.getAttribute('href');

  imageMain.src = `${new URL(href, location.origin).href}`;
});
