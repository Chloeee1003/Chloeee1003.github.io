// 自动轮播绘画作品
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel .slide');
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // 每 3 秒切换一次
  setInterval(nextSlide, 3000);
});
