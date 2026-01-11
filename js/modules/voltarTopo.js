export default function initVoltarTopo() {
  const btn = document.getElementById('voltarTopo');

  if (btn) {
    function checkScroll() {
      if (window.pageYOffset > 500) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    window.addEventListener('scroll', checkScroll);
    btn.addEventListener('click', scrollToTop);
  }
}
