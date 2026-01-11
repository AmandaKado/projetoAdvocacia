export default function initScrollReveal() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowAjustado = window.innerHeight * 0.9;

    function animaScroll() {
      sections.forEach((section) => {
        if (section.classList.contains('ativo')) return;

        if (section.getBoundingClientRect().top < windowAjustado) {
          section.classList.add('ativo');
        }
      });
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
