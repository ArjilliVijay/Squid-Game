let current = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

