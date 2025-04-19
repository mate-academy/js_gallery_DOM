'use strict';

const linkAll = document.querySelectorAll('.list-item__link');
const wrapper = document.querySelector('.gallery > div');

linkAll.forEach((item) => {
  item.addEventListener('click', gallaryImages);
});

function gallaryImages(e) {
  e.preventDefault();

  const clone = e.currentTarget.querySelector('img').cloneNode(true);

  clone.classList.remove('gallery__thumb');
  clone.classList.add('gallery__large-img');
  clone.id = 'largeImg';
  clone.alt = 'main image';
  clone.height = 348;

  wrapper.innerHTML = '';
  wrapper.appendChild(clone);
}
