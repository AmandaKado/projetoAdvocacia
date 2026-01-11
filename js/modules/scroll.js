export default function initScrollReveal() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {

    const windowAjustado = window.innerHeight * 1;

    function animaScroll() {
      sections.forEach((section) => {
        const secaoTopo = section.getBoundingClientRect().top;

        if (secaoTopo < windowAjustado) {
          section.classList.add('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
