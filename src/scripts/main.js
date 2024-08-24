const links = document.querySelectorAll('.list-item__link');
const mainFoto = document.querySelector('.gallery__large-img');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    mainFoto.src = link.href;
  });
}
