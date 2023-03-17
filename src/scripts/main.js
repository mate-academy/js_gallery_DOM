'use strict';

const list = document.querySelector('.gallery__list');
const container = document.querySelector('#largeImg').parentElement;

list.addEventListener('click', (e) => {
  const item = e.target;

  e.preventDefault();
  container.innerHTML = item.outerHTML;
  container.firstChild.setAttribute('id', 'largeImg');
  container.firstChild.classList.add('gallery__large-img');
  container.firstChild.classList.remove('gallery__thumb');
  container.firstChild.src = item.parentElement.href;
});
