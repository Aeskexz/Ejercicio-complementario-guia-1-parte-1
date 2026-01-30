const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showImage(i) {
  const width = images.querySelector('img').clientWidth;
  images.style.transform = `translateX(${-i * width}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : images.children.length - 1;
  showImage(index);
});

nextBtn.addEventListener('click', () => {
  index = (index < images.children.length - 1) ? index + 1 : 0;
  showImage(index);
});