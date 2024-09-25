const thumbs = document.querySelectorAll('.list-item__link');
const largeImg = document.querySelector('#largeImg');

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener('click', (ev) => {
    ev.preventDefault();
    largeImg.src = thumbs[i].href;
  });
}
