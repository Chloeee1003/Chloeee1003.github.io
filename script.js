document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.bg-slide');
  let current = 0;

  function nextSlide() {
    // 当前图淡出
    slides[current].classList.remove('active');
    // 移到下一张，如果到了最后一张就回到第一张
    current = (current + 1) % slides.length;
    // 新图淡入
    slides[current].classList.add('active');
  }

  // 每 5000 毫秒（5 秒）切换一次
  setInterval(nextSlide, 5000);
});
