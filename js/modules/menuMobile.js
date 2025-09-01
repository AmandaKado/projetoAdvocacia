export default function initMenuMobile() {
    // Seleciona os elementos principais uma única vez
    const btnMobile = document.getElementById("btnMobile");
    const nav = document.getElementById("nav");
    const links = document.querySelectorAll("#menu a");

    // Função para abrir/fechar o menu
    function toggleMenu(event) {
        // Previne o comportamento padrão para eventos de toque
        if (event.type === "touchstart") event.preventDefault();
        
        // Adiciona ou remove a classe 'active'
        nav.classList.toggle("active");

        // Verifica se o menu está ativo para atualizar os atributos ARIA
        const isActive = nav.classList.contains("active");
        btnMobile.setAttribute("aria-expanded", isActive);
        
        if (isActive) {
            btnMobile.setAttribute("aria-label", "Fechar Menu");
        } else {
            btnMobile.setAttribute("aria-label", "Abrir Menu");
        }
    }

    // Função para fechar o menu (será usada pelos links)
    function closeMenu() {
        nav.classList.remove("active");
        
        // Garante que os atributos ARIA sejam atualizados
        btnMobile.setAttribute("aria-expanded", "false");
        btnMobile.setAttribute("aria-label", "Abrir Menu");
    }

    // Adiciona os eventos ao botão do menu
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);

    // Adiciona um evento de clique a cada link do menu para fechar
    links.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}