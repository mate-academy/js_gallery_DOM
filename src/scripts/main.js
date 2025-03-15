function ready() {
  const mainImg = document.querySelector('#largeImg');
  const imagesList = document.querySelector('#thumbs');

  imagesList.addEventListener('click', function (e) {
    e.preventDefault();

    const link = e.target.closest('a');

    if (!link) {
      return;
    }

    mainImg.src = link.href;
  });
}

document.addEventListener('DOMContentLoaded', ready);
