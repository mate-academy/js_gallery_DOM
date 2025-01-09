const mainImg = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (list && list.contains(link)) {
    e.preventDefault();
    mainImg.src = link.href;
  }
});
