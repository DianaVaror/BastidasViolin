// Cambiar de imagen cada 3 segundos (ajusta el tiempo según tus necesidades)
setInterval(() => {
    const carouselInner = document.querySelector('.carousel-inner');
    const firstItem = carouselInner.firstElementChild;
    carouselInner.style.transform = `translateX(-${firstItem.offsetWidth}px)`;
    carouselInner.appendChild(firstItem);
  }, 3000);
  