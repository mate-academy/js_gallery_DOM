const one = document.querySelectorAll('.list-item__link')[0];
const two = document.querySelectorAll('.list-item__link')[1];
const three = document.querySelectorAll('.list-item__link')[2];
const four = document.querySelectorAll('.list-item__link')[3];
const five = document.querySelectorAll('.list-item__link')[4];

const title = document.querySelector('#largeImg');

one.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.src = one.href;
});

two.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.src = two.href;
});

three.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.src = three.href;
});

four.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.src = four.href;
});

five.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.src = five.href;
});
